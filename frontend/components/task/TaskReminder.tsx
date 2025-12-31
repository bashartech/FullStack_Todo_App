'use client';

import { useEffect, useRef } from 'react';
import { Task } from '@/lib/api';

interface TaskReminderProps {
  tasks: Task[];
}

export default function TaskReminder({ tasks }: TaskReminderProps) {
  const scheduledRemindersRef = useRef<Record<number, number>>({});

  useEffect(() => {
    // Check for notification permission on initial load
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        if (Notification.permission === 'default') {
          await Notification.requestPermission();
        }
      }
    };

    requestNotificationPermission();

    // Clear any previously scheduled reminders
    Object.values(scheduledRemindersRef.current).forEach(timeoutId => {
      clearTimeout(timeoutId);
    });
    scheduledRemindersRef.current = {};

    // Schedule reminders for tasks that have reminder_at set
    tasks.forEach(task => {
      if (task.reminder_at && !task.completed) {
        const reminderTime = new Date(task.reminder_at).getTime();
        const currentTime = Date.now();
        const timeUntilReminder = reminderTime - currentTime;

        // Only schedule if the reminder is in the future
        if (timeUntilReminder > 0) {
          const timeoutId = window.setTimeout(() => {
            showNotification(task);
            // Remove the timeout ID from our reference after execution
            delete scheduledRemindersRef.current[task.id];
          }, timeUntilReminder);

          // Store the timeout ID so we can clear it later if needed
          scheduledRemindersRef.current[task.id] = timeoutId;
        }
      }
    });

    // Cleanup function to clear all scheduled reminders when component unmounts
    return () => {
      Object.values(scheduledRemindersRef.current).forEach(timeoutId => {
        clearTimeout(timeoutId);
      });
      scheduledRemindersRef.current = {};
    };
  }, [tasks]);

  const showNotification = (task: Task) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification(`Task Reminder: ${task.title}`, {
        body: task.description || 'Time to work on this task!',
        icon: '/favicon.ico', // Use your app's icon
        tag: `task-reminder-${task.id}`
      });

      // Close the notification after 10 seconds
      setTimeout(() => {
        notification.close();
      }, 10000);

      // Open the dashboard when notification is clicked
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    } else {
      // Fallback: Show an in-app notification if browser notifications are not permitted
      console.log(`Reminder for task: ${task.title} - ${task.description || 'Time to work on this task!'}`);
    }
  };

  return null; // This component doesn't render anything visible
}