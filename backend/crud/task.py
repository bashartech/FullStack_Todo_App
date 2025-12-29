from sqlmodel import Session, select, case
from typing import List, Optional
import json
try:
    from ..models.task import Task, TaskCreate, TaskUpdate, TaskRead
except ImportError:
    from models.task import Task, TaskCreate, TaskUpdate, TaskRead
def create_task(session: Session, task: TaskCreate, user_id: str) -> TaskRead:
    """
    Create a new task in the database.

    Args:
        session: Database session
        task: TaskCreate object with task data
        user_id: ID of the user creating the task

    Returns:
        Created Task object converted to TaskRead format
    """
    # Convert tags list to JSON string for storage, ensuring it's always a valid JSON array
    tags_json = json.dumps(task.tags) if task.tags is not None else "[]"

    # Convert priority enum to string for database storage
    priority_str = task.priority.value if hasattr(task.priority, 'value') else task.priority

    db_task = Task(
        title=task.title,
        description=task.description,
        completed=task.completed,
        user_id=user_id,
        priority=priority_str,
        tags=tags_json,
        due_date=task.due_date
    )

    session.add(db_task)
    session.commit()
    session.refresh(db_task)

    # Return the task in TaskRead format to properly handle the tags field
    return convert_task_to_read(db_task)


def get_tasks_by_user(
    session: Session,
    user_id: str,
    completed: Optional[str] = None,
    priority: Optional[str] = None,
    search: Optional[str] = None,
    sort: Optional[str] = "created_at",
    order: Optional[str] = "desc",
    tags: Optional[str] = None
) -> List[TaskRead]:
    """
    Retrieve all tasks for a specific user.

    Args:
        session: Database session
        user_id: ID of the user whose tasks to retrieve
        completed: Optional filter for completion status ("pending", "completed", "all")
        priority: Optional filter for priority ("low", "medium", "high")
        search: Optional search term to search in title and description
        sort: Field to sort by ("created_at", "due_date", "priority", "title")
        order: Sort order ("asc", "desc")
        tags: Optional tag to filter by

    Returns:
        List of Task objects converted to TaskRead format
    """
    query = select(Task).where(Task.user_id == user_id)

    # Apply filters
    if completed == "pending":
        query = query.where(Task.completed == False)
    elif completed == "completed":
        query = query.where(Task.completed == True)

    if priority:
        # Convert priority enum to string for database query if needed
        priority_str = priority.value if hasattr(priority, 'value') else priority
        query = query.where(Task.priority == priority_str)

    if search:
        # Search in both title and description using ILIKE for case-insensitive matching
        search_pattern = f"%{search}%"
        query = query.where((Task.title.ilike(search_pattern)) | (Task.description.ilike(search_pattern)))

    if tags:
        # Filter by tag - check if the tag exists in the JSON array
        # Use PostgreSQL's JSON contains operator to check if the tag is in the tags array
        query = query.where(Task.tags.op('::jsonb').contains('["' + tags + '"]'))

    # Apply sorting
    if sort == "due_date":
        if order == "asc":
            query = query.order_by(Task.due_date.asc(), Task.created_at.desc())
        else:
            query = query.order_by(Task.due_date.desc(), Task.created_at.desc())
    elif sort == "priority":
        # Sort by priority: high, medium, low
        priority_order = case(
            (Task.priority == "high", 1),
            (Task.priority == "medium", 2),
            (Task.priority == "low", 3),
            else_=4
        )
        if order == "asc":
            query = query.order_by(priority_order.asc(), Task.created_at.desc())
        else:
            query = query.order_by(priority_order.asc(), Task.created_at.desc())
    elif sort == "title":
        if order == "asc":
            query = query.order_by(Task.title.asc())
        else:
            query = query.order_by(Task.title.desc())
    else:  # Default to created_at
        if order == "asc":
            query = query.order_by(Task.created_at.asc())
        else:
            query = query.order_by(Task.created_at.desc())

    tasks = session.exec(query).all()
    # Convert all tasks to TaskRead format before returning
    return [convert_task_to_read(task) for task in tasks]




def convert_task_to_read(task: Task) -> TaskRead:
    """
    Convert a Task object to a TaskRead object.
    This properly handles the tags field conversion from JSON string to list.
    """
    if task:
        # Safely parse the tags JSON, with fallback to empty list if invalid
        tags_list = []
        if task.tags:
            try:
                tags_list = json.loads(task.tags)
                # Ensure tags_list is always a list
                if not isinstance(tags_list, list):
                    tags_list = []
            except json.JSONDecodeError:
                # If JSON is malformed, return empty list
                tags_list = []

        return TaskRead(
            id=task.id,
            title=task.title,
            description=task.description,
            completed=task.completed,
            user_id=task.user_id,
            created_at=task.created_at,
            updated_at=task.updated_at,
            priority=task.priority,
            tags=tags_list,
            due_date=task.due_date
        )
    return None

def get_task_by_id_and_user(session: Session, task_id: int, user_id: str) -> Optional[TaskRead]:
    """
    Retrieve a specific task by ID and user ID.

    Args:
        session: Database session
        task_id: ID of the task to retrieve
        user_id: ID of the user who owns the task

    Returns:
        Task object converted to TaskRead format if found and owned by user, None otherwise
    """
    task = session.get(Task, task_id)
    if task and task.user_id == user_id:
        return convert_task_to_read(task)
    return None


def update_task(
    session: Session,
    task_id: int,
    user_id: str,
    task_update: TaskUpdate
) -> Optional[TaskRead]:
    """
    Update a specific task.

    Args:
        session: Database session
        task_id: ID of the task to update
        user_id: ID of the user who owns the task
        task_update: TaskUpdate object with update data

    Returns:
        Updated Task object converted to TaskRead format if successful, None if task not found or not owned by user
    """
    db_task = session.get(Task, task_id)

    if not db_task or db_task.user_id != user_id:
        return None

    # Update only the fields that are provided in the request
    if task_update.title is not None:
        db_task.title = task_update.title
    if task_update.description is not None:
        db_task.description = task_update.description
    if task_update.completed is not None:
        db_task.completed = task_update.completed
    if task_update.priority is not None:
        # Convert priority enum to string for database storage
        db_task.priority = task_update.priority.value if hasattr(task_update.priority, 'value') else task_update.priority
    if task_update.tags is not None:
        # Convert tags list to JSON string for storage, ensuring it's always a valid JSON array
        db_task.tags = json.dumps(task_update.tags) if task_update.tags is not None else "[]"
    if task_update.due_date is not None:
        db_task.due_date = task_update.due_date

    session.add(db_task)
    session.commit()
    session.refresh(db_task)

    return convert_task_to_read(db_task)


def toggle_task_completion(session: Session, task_id: int, user_id: str) -> Optional[TaskRead]:
    """
    Toggle the completion status of a task.

    Args:
        session: Database session
        task_id: ID of the task to update
        user_id: ID of the user who owns the task

    Returns:
        Updated Task object converted to TaskRead format if successful, None if task not found or not owned by user
    """
    db_task = session.get(Task, task_id)

    if not db_task or db_task.user_id != user_id:
        return None

    # Toggle the completion status
    db_task.completed = not db_task.completed

    session.add(db_task)
    session.commit()
    session.refresh(db_task)

    return convert_task_to_read(db_task)


def delete_task(session: Session, task_id: int, user_id: str) -> bool:
    """
    Delete a specific task.

    Args:
        session: Database session
        task_id: ID of the task to delete
        user_id: ID of the user who owns the task

    Returns:
        True if task was deleted, False if task not found or not owned by user
    """
    db_task = session.get(Task, task_id)

    if not db_task or db_task.user_id != user_id:
        return False

    session.delete(db_task)
    session.commit()

    return True


def get_task_by_id(session: Session, task_id: int) -> Optional[Task]:
    """
    Retrieve a task by ID without checking user ownership.
    This is used internally when user ownership has already been verified.

    Args:
        session: Database session
        task_id: ID of the task to retrieve

    Returns:
        Task object if found, None otherwise
    """
    task = session.get(Task, task_id)
    return task