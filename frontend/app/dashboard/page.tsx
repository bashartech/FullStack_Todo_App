'use client';

import { useState, useEffect } from 'react';
import { api, Task } from '@/lib/api';
import { useRouter } from 'next/navigation';
import TaskItem from '@/components/task/TaskItem';
import Logout from '@/components/logout'

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await api.tasks.getTasks();
      setTasks(tasksData);
      setError(null);
    } catch (err) {
      setError('Failed to load tasks. Please try again.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTaskTitle.trim()) {
      setError('Task title is required');
      return;
    }

    try {
      const newTask = await api.tasks.createTask({
        title: newTaskTitle,
        description: newTaskDescription,
        completed: false,
      });

      setTasks([newTask, ...tasks]);
      setNewTaskTitle('');
      setNewTaskDescription('');
      setSuccess('Task created successfully!');
      setError(null);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error('Error creating task:', err);
    }
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const handleDeleteTask = async (taskId: number) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      await api.tasks.deleteTask(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
      setSuccess('Task deleted successfully!');

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
    }
  };

  const handleToggleTaskCompletion = async (taskId: number) => {
    try {
      const updatedTask = await api.tasks.toggleTaskCompletion(taskId);

      setTasks(tasks.map(task =>
        task.id === taskId ? updatedTask : task
      ));
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', err);
    }
  };

  const handleSignOut = async () => {
    try {
      await Logout();
      router.push('/');
    } catch (err) {
      setError('Failed to sign out. Please try again.');
      console.error('Error signing out:', err);
    }
  };

  return (
    <div className="max-w-4xl bg-white mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
        <div className="flex items-center space-x-4">
          {/* <span className="text-gray-600">Welcome, {user?.email || user?.name || 'User'}</span> */}
          <button
            onClick={handleSignOut}
            className="text-sm bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Success/Error Messages */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
          {success}
        </div>
      )}

      {/* Task Creation Form */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl text-black font-semibold mb-4">Create New Task</h2>
        <form onSubmit={handleCreateTask}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-900 mb-1">
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="What needs to be done?"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              className="w-full text-gray-900 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add details (optional)"
              rows={3}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Task'}
          </button>
        </form>
      </div>

      {/* Tasks List */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Your Tasks</h2>
        </div>

        {loading ? (
          <div className="p-8 text-center">
            <p>Loading tasks...</p>
          </div>
        ) : tasks.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500">No tasks yet. Create your first task above!</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onUpdate={handleUpdateTask}
                onDelete={handleDeleteTask}
                onToggleCompletion={handleToggleTaskCompletion}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
    // <>
    // <div className='text-white'>
    // hi
    // <div className='border-4 cursor-pointer bg-slate-400 text-slate-950 '>
    //   < Logout  />
    // </div>

    // </div>
    // </>
  );
}