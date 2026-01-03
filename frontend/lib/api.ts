// API client for authenticated data flow
import { authClient } from "./auth-client";

// Get the base URL from environment variable or default to development URL
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://bashartc14-todo-backend.hf.space/api' || "http://localhost:8000/api";

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
}

// Generic API request function
async function apiRequest<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', body, headers = {} } = options;

  // Get the authentication token if available
  let token: string | null = null;
  try {
    // With JWT plugin enabled, use authClient.token() to get the JWT token
    // This is the correct method to retrieve JWT tokens from Better Auth when jwtClient plugin is enabled
    const tokenResult = await authClient.token();
    console.log('Token result from authClient.token():', tokenResult); // Debug log

    // Check if the result is an error
    if (tokenResult && 'error' in tokenResult && tokenResult.error) {
      console.warn('Error getting JWT token:', tokenResult.error);
    } else if (tokenResult && 'data' in tokenResult && tokenResult.data?.token) {
      token = tokenResult.data.token;
      console.log('JWT token retrieved:', token ? 'YES' : 'NO'); // Debug log for JWT verification
    } else {
      console.log('No JWT token available - user may not be authenticated');
    }
  } catch (error) {
    console.warn('Could not get JWT token:', error);
  }

  // Prepare headers
  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Add authorization header if token is available
  if (token) {
    requestHeaders['Authorization'] = `Bearer ${token}`;
    console.log('Authorization header added with token'); // Debug log for JWT verification
  }

  // Prepare request body
  const requestBody = body ? JSON.stringify(body) : undefined;

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: requestHeaders,
      body: requestBody,
    });

    // If response is not OK, throw an error with the response text
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    // Handle responses that have content
    if (response.status !== 204) {
      return await response.json();
    }

    // For 204 No Content responses, return an empty object
    return {} as T;
  } catch (error) {
    console.error(`API request failed for ${method} ${endpoint}:`, error);
    throw error;
  }
}

// Task-related API functions
export const taskApi = {
  // Get all tasks with filtering, search, and sorting options
  getTasks: (
    completed?: 'all' | 'pending' | 'completed',
    priority?: 'low' | 'medium' | 'high',
    search?: string,
    sort?: 'created_at' | 'due_date' | 'priority' | 'title',
    order?: 'asc' | 'desc',
    tags?: string
  ) => {
    const params = new URLSearchParams();
    if (completed) params.append('completed', completed);
    if (priority) params.append('priority', priority);
    if (search) params.append('search', search);
    if (sort) params.append('sort', sort);
    if (order) params.append('order', order);
    if (tags) params.append('tags', tags);

    let url = '/tasks';
    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    return apiRequest<Task[]>(url, { method: 'GET' });
  },

  // Create a new task
  createTask: (taskData: Omit<Task, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    return apiRequest<Task>('/tasks', {
      method: 'POST',
      body: taskData,
    });
  },

  // Update a task
  updateTask: (taskId: number, taskData: Partial<Task>) => {
    return apiRequest<Task>(`/tasks/${taskId}`, {
      method: 'PUT',
      body: taskData,
    });
  },

  // Toggle task completion
  toggleTaskCompletion: (taskId: number) => {
    return apiRequest<Task>(`/tasks/${taskId}/complete`, {
      method: 'PATCH',
    });
  },

  // Delete a task
  deleteTask: (taskId: number) => {
    return apiRequest<{}>(`/tasks/${taskId}`, {
      method: 'DELETE',
    });
  },
};

// Define TypeScript interfaces
export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  user_id: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  due_date?: string; // ISO date string
  is_recurring: boolean;
  recurrence_type?: 'daily' | 'weekly' | 'monthly';
  recurrence_interval: number;
  next_run_at?: string; // ISO date string
  reminder_at?: string; // ISO date string
}

// Export the main API client
export const api = {
  tasks: taskApi,
};