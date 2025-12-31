# Plan: Advanced Intelligent Task Features (Due Dates, Recurring Tasks, Reminders)

**Feature ID**: 004-advanced-intelligent-tasks  
**Branch**: `feature/intelligent-tasks`  
**Input Spec**: `/specs/004-advanced-intelligent-tasks/spec.md`  
**Project State**:  
- Authentication (Better Auth + JWT) → ✅ Working  
- Backend (FastAPI + Neon + SQLModel) → ✅ Connected  
- Tasks CRUD → ⚠️ Exists but extended here  
- No new services or infra required  

---

## Objective

Extend the existing task system with:
1. Due Dates
2. Recurring Tasks
3. Browser-based Time Reminders

This plan **verifies, extends, and corrects** the current workflow without recreating existing logic.

---

## Non-Goals (Strict)

- ❌ No new authentication logic
- ❌ No backend schedulers / cron jobs
- ❌ No email or push notifications
- ❌ No new databases or adapters

---

## Phase 0: Pre-Check (MANDATORY)

> Claude MUST verify these before proceeding

- [ ] Confirm `models/task.py` already exists
- [ ] Confirm tasks table exists in Neon DB
- [ ] Confirm JWT auth middleware is already enforced
- [ ] Confirm CRUD endpoints already work without these features

If any of the above fail → STOP and report.

---

## Phase 1: Data Model Extension (Blocking)

### Goal
Extend the existing Task model with new intelligent fields.

### Tasks

- [ ] P001 Open `backend/models/task.py`
- [ ] P002 Add the following fields **without removing existing ones**:

  ```python
  due_date: Optional[datetime]
  is_recurring: bool = False
  recurrence_type: Optional[str]  # daily | weekly | monthly
  recurrence_interval: int = 1
  next_run_at: Optional[datetime]
  reminder_at: Optional[datetime]
 P003 Ensure all new fields are nullable and backward-compatible

 P004 Update SQLModel metadata only (no table rename)

Phase 2: Database Migration (Blocking)
Goal
Apply schema changes safely to Neon PostgreSQL.

Tasks
 P005 Generate migration using the existing Neon + SQLModel workflow

 P006 Review migration to ensure:

No table drops

Only column additions

 P007 Apply migration to Neon DB

 P008 Verify new columns exist using a SELECT query

Phase 3: Backend Logic — Due Dates
Goal
Enable due date storage and usage.

Tasks
 P009 Update task create endpoint to accept due_date

 P010 Update task update endpoint to allow modifying due_date

 P011 Ensure due_date is validated as datetime

 P012 Ensure overdue logic is NOT enforced server-side (UI only)

Phase 4: Backend Logic — Recurring Tasks (Core Intelligence)
Goal
Auto-generate next task instance on completion.

Tasks
 P013 Update task completion logic (existing endpoint)

 P014 On completion:

Check is_recurring == true

Calculate next due date based on recurrence_type

 P015 Create new task with:

Same title & description

New due_date

Same recurrence rules

is_completed = false

 P016 Ensure:

Only ONE new task is created

Completed task remains unchanged

Phase 5: Frontend — Due Date UI
Goal
Allow users to set and view due dates.

Tasks
 P017 Add date picker to task form

 P018 Display due date in task list

 P019 Highlight overdue tasks visually

 P020 Ensure due date sorting works visually (no backend sort yet)

Phase 6: Frontend — Recurring UI
Goal
Allow users to configure recurrence.

Tasks
 P021 Add recurrence toggle to task form

 P022 Add recurrence type dropdown

 P023 Disable recurrence inputs when toggle is off

 P024 Display recurrence badge on task cards

Phase 7: Frontend — Time Reminders (Browser Only)
Goal
Trigger reminders using browser notifications.

Tasks
 P025 Add reminder time picker

 P026 Request Notification permission once

 P027 On task load:

Schedule reminders using setTimeout

 P028 Ensure reminder fires only once

 P029 Do NOT persist reminder timers in backend

Phase 8: Integration Verification
Goal
Ensure everything works together.

Tasks
 P030 Create task with due date → verify storage

 P031 Complete recurring task → verify next task created

 P032 Reload page → reminders still work

 P033 Verify no duplicate recurring tasks

 P034 Verify no JWT or CRUD regression

Phase 9: UX & Edge Case Handling
Tasks
 P035 Handle timezone safely (use ISO timestamps)

 P036 Prevent reminder scheduling for past dates

 P037 Show friendly UI messages for invalid inputs

 P038 Ensure tasks remain user-isolated