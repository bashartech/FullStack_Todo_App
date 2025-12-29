# Spec: Advanced Intelligent Task Features

## Purpose

Introduce intelligent task automation features:
1. Recurring Tasks
2. Due Dates
3. Time-based Reminders

This spec builds on:
- Existing Tasks CRUD
- Existing JWT authentication
- Existing Neon PostgreSQL + SQLModel setup

No authentication, database connection, or CRUD logic should be recreated.

---

## Feature Scope

### Included
- Task due dates
- Recurrence rules (daily/weekly/monthly)
- Auto-generation of next recurring task
- Browser-based reminders

### Excluded
- Background workers
- Push notifications
- Cron jobs
- External schedulers

---

## Data Model Changes

### New Fields in `models/task.py`

| Field | Type | Description |
|----|----|-----------|
| due_date | datetime | Deadline for task |
| is_recurring | bool | Whether task repeats |
| recurrence_type | str | daily / weekly / monthly |
| recurrence_interval | int | Usually 1 (MVP) |
| next_run_at | datetime | Next occurrence date |
| reminder_at | datetime | Time to trigger reminder |

---

## Backend Behavior

### Task Creation
- Accept optional:
  - due_date
  - is_recurring
  - recurrence_type
  - reminder_at
- Validate recurrence fields only if is_recurring = true

---

### Task Completion Logic

When a task is marked as completed:
1. Check if `is_recurring = true`
2. If true:
   - Calculate next due date
   - Create a new task:
     - Same title & description
     - New due_date
     - Same recurrence rules
     - is_completed = false
3. Preserve completed task as history

---

### Recurrence Calculation Rules

| Type | Rule |
|----|-----|
| daily | due_date + 1 day |
| weekly | due_date + 7 days |
| monthly | same date next month |

---

## Frontend Behavior

### Task Form UI
- Date picker for due date
- Toggle for recurrence
- Dropdown for recurrence type
- Time picker for reminder

---

### Reminder Logic (Frontend Only)

1. On task fetch:
   - Read reminder_at
2. If reminder_at exists and is in future:
   - Schedule browser notification
3. Use Notification API:
   - Request permission once
4. Fire reminder with task title

---

## UX Rules

- Overdue tasks highlighted
- Recurring tasks labeled (e.g., “Weekly”)
- Reminder status visible (clock icon)

---

## Acceptance Criteria

- User can set due dates
- User can enable recurring tasks
- Completing recurring task creates next one
- Browser reminder fires at correct time
- No duplicate recurring tasks created
- No auth or CRUD regression

---

## Non-Goals

- Server-side schedulers
- Email reminders
- Push notifications
- Advanced recurrence rules

---

## Validation Checklist

- Due dates stored correctly
- Recurrence creates next task only once
- Reminder fires only once
- Works after page reload
- Tasks remain user-scoped

End of spec.
