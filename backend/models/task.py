from sqlmodel import SQLModel, Field
from typing import Optional, List
from datetime import datetime
import json
from enum import Enum

class PriorityEnum(str, Enum):
    low = "low"
    medium = "medium"
    high = "high"

class TaskBase(SQLModel):
    title: str = Field(min_length=1, max_length=200)
    description: Optional[str] = Field(default=None, max_length=1000)
    completed: bool = Field(default=False)

class Task(TaskBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: str = Field(index=True)  # User ID from JWT token
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    # New fields for advanced features
    priority: str = Field(default="medium", max_length=20)  # low, medium, high
    tags: str = Field(default="[]", max_length=1000)  # JSON string for tags array
    due_date: Optional[datetime] = Field(default=None)  # Optional due date

class TaskCreate(TaskBase):
    priority: PriorityEnum = Field(default=PriorityEnum.medium)  # low, medium, high
    tags: Optional[List[str]] = []  # Array of tags
    due_date: Optional[datetime] = None  # Optional due date

class TaskRead(TaskBase):
    id: int
    user_id: str
    created_at: datetime
    updated_at: datetime
    # New fields for advanced features
    priority: PriorityEnum
    tags: List[str]
    due_date: Optional[datetime]

class TaskUpdate(SQLModel):
    title: Optional[str] = Field(default=None, min_length=1, max_length=200)
    description: Optional[str] = Field(default=None, max_length=1000)
    completed: Optional[bool] = None
    # New fields for advanced features
    priority: Optional[PriorityEnum] = Field(default=None)  # low, medium, high
    tags: Optional[List[str]] = None  # Array of tags
    due_date: Optional[datetime] = None  # Optional due date