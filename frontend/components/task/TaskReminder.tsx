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
          const permission = await Notification.requestPermission();
          console.log('Notification permission:', permission);
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
        try {
          // Parse the reminder time - handle ISO string properly
          const reminderDate = new Date(task.reminder_at);
          const reminderTime = reminderDate.getTime();
          const currentTime = Date.now();
          const timeUntilReminder = reminderTime - currentTime;

          console.log(`Task ${task.id}: reminder set for ${reminderDate}, current time: ${new Date()}, time until: ${timeUntilReminder}ms`);

          // Only schedule if the reminder is in the future (positive time difference)
          if (timeUntilReminder > 0) {
            const timeoutId = window.setTimeout(() => {
              console.log(`Executing reminder for task: ${task.title}`);
              showNotification(task);
              // Remove the timeout ID from our reference after execution
              delete scheduledRemindersRef.current[task.id];
            }, timeUntilReminder);

            // Store the timeout ID so we can clear it later if needed
            scheduledRemindersRef.current[task.id] = timeoutId;
          } else if (timeUntilReminder < 0) {
            // The reminder time has already passed, potentially show notification immediately or skip
            console.log(`Reminder for task ${task.id} was scheduled in the past: ${Math.abs(timeUntilReminder)}ms ago`);
          }
        } catch (error) {
          console.error('Error parsing reminder date for task:', task.id, error);
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
    console.log('Attempting to show notification for task:', task.title);

    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        const notification = new Notification(`Task Reminder: ${task.title}`, {
          body: task.description || 'Time to work on this task!',
          icon: '/favicon.ico', // Use your app's icon
          tag: `task-reminder-${task.id}`
        });

        // Close the notification after 10 seconds
        setTimeout(() => {
          if (notification) {
            notification.close();
          }
        }, 10000);

        // Open the dashboard when notification is clicked
        notification.onclick = () => {
          window.focus();
          notification.close();
        };
      } catch (error) {
        console.error('Error showing notification:', error);
      }
    } else {
      // Fallback: Show an in-app notification if browser notifications are not permitted
      console.log(`Reminder for task: ${task.title} - ${task.description || 'Time to work on this task!'}`);
      // You could also use a toast notification library here
    }
  };

  return null; // This component doesn't render anything visible
}