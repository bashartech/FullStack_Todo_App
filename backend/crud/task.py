from sqlmodel import Session, select
from typing import List, Optional
try:
    from ..models.task import Task, TaskCreate, TaskUpdate
except ImportError:
    from models.task import Task, TaskCreate, TaskUpdate

def create_task(session: Session, task: TaskCreate, user_id: str) -> Task:
    """
    Create a new task in the database.

    Args:
        session: Database session
        task: TaskCreate object with task data
        user_id: ID of the user creating the task

    Returns:
        Created Task object
    """
    db_task = Task(
        title=task.title,
        description=task.description,
        completed=task.completed,
        user_id=user_id
    )

    session.add(db_task)
    session.commit()
    session.refresh(db_task)

    return db_task


def get_tasks_by_user(
    session: Session,
    user_id: str,
    completed: Optional[str] = None
) -> List[Task]:
    """
    Retrieve all tasks for a specific user.

    Args:
        session: Database session
        user_id: ID of the user whose tasks to retrieve
        completed: Optional filter for completion status ("pending", "completed", "all")

    Returns:
        List of Task objects
    """
    query = select(Task).where(Task.user_id == user_id)

    if completed == "pending":
        query = query.where(Task.completed == False)
    elif completed == "completed":
        query = query.where(Task.completed == True)

    return session.exec(query).all()


def get_task_by_id_and_user(session: Session, task_id: int, user_id: str) -> Optional[Task]:
    """
    Retrieve a specific task by ID and user ID.

    Args:
        session: Database session
        task_id: ID of the task to retrieve
        user_id: ID of the user who owns the task

    Returns:
        Task object if found and owned by user, None otherwise
    """
    task = session.get(Task, task_id)
    if task and task.user_id == user_id:
        return task
    return None


def update_task(
    session: Session,
    task_id: int,
    user_id: str,
    task_update: TaskUpdate
) -> Optional[Task]:
    """
    Update a specific task.

    Args:
        session: Database session
        task_id: ID of the task to update
        user_id: ID of the user who owns the task
        task_update: TaskUpdate object with update data

    Returns:
        Updated Task object if successful, None if task not found or not owned by user
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

    session.add(db_task)
    session.commit()
    session.refresh(db_task)

    return db_task


def toggle_task_completion(session: Session, task_id: int, user_id: str) -> Optional[Task]:
    """
    Toggle the completion status of a task.

    Args:
        session: Database session
        task_id: ID of the task to update
        user_id: ID of the user who owns the task

    Returns:
        Updated Task object if successful, None if task not found or not owned by user
    """
    db_task = session.get(Task, task_id)

    if not db_task or db_task.user_id != user_id:
        return None

    # Toggle the completion status
    db_task.completed = not db_task.completed

    session.add(db_task)
    session.commit()
    session.refresh(db_task)

    return db_task


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
    return session.get(Task, task_id)