// 'use client';

// import { Task } from '@/lib/api';
// import { useState } from 'react';

// interface TaskItemProps {
//   task: Task;
//   onUpdate: (updatedTask: Task) => void;
//   onDelete: (taskId: number) => void;
//   onToggleCompletion: (taskId: number) => void;
// }

// export default function TaskItem({ task, onUpdate, onDelete, onToggleCompletion }: TaskItemProps) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description || '');
//   const [priority, setPriority] = useState<'low' | 'medium' | 'high'>(task.priority || 'medium');
//   const [tags, setTags] = useState(task.tags?.join(', ') || '');
//   const [dueDate, setDueDate] = useState(task.due_date || '');

//   const handleSave = () => {
//     onUpdate({
//       ...task,
//       title,
//       description,
//       priority,
//       tags: tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [],
//       due_date: dueDate || undefined,
//     });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setTitle(task.title);
//     setDescription(task.description || '');
//     setPriority(task.priority || 'medium');
//     setTags(task.tags?.join(', ') || '');
//     setDueDate(task.due_date || '');
//     setIsEditing(false);
//   };

//   return (
//     <li className="card-elevated hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
//       <div className="flex items-start justify-between">
//         <div className="flex items-start space-x-4 flex-1 min-w-0">
//           <input
//             type="checkbox"
//             checked={task.completed}
//             onChange={() => onToggleCompletion(task.id)}
//             className="mt-1 h-5 w-5 text-blue-500 rounded focus:ring-blue-500 focus:ring-2 border-gray-600 bg-gray-800"
//           />
//           <div className="flex-1 min-w-0">
//             {isEditing ? (
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="input-glass w-full px-4 py-3 text-lg font-medium bg-gray-800/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Task title"
//                 />
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="input-glass w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Task description (optional)"
//                   rows={3}
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <select
//                     value={priority}
//                     onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
//                     className="input-glass px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="low">Low Priority</option>
//                     <option value="medium">Medium Priority</option>
//                     <option value="high">High Priority</option>
//                   </select>
//                   <input
//                     type="date"
//                     value={dueDate}
//                     onChange={(e) => setDueDate(e.target.value)}
//                     className="input-glass px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <input
//                   type="text"
//                   value={tags}
//                   onChange={(e) => setTags(e.target.value)}
//                   className="input-glass w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Tags (comma separated)"
//                 />
//                 <div className="flex space-x-3 pt-2">
//                   <button
//                     onClick={handleSave}
//                     className="btn-primary px-4 py-2 text-sm"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={handleCancel}
//                     className="btn-outline px-4 py-2 text-sm"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className={`text-lg font-medium truncate ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
//                     {task.title}
//                   </h3>
//                   <div className="flex space-x-2 ml-4">
//                     {/* Priority badge */}
//                     <span className={`${
//                       task.priority === 'high' ? 'priority-high' :
//                       task.priority === 'medium' ? 'priority-medium' :
//                       'priority-low'
//                     }`}>
//                       {task.priority}
//                     </span>
//                   </div>
//                 </div>

//                 {task.description && (
//                   <p className={`text-gray-300 mb-3 ${task.completed ? 'opacity-60' : ''}`}>
//                     {task.description}
//                   </p>
//                 )}

//                 {/* Display tags */}
//                 {task.tags && task.tags.length > 0 && (
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     {task.tags.map((tag, index) => (
//                       <span key={index} className="tag">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* Display due date if available */}
//                 {task.due_date && (
//                   <div className="flex items-center text-sm text-gray-400 mb-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                     Due: {new Date(task.due_date).toLocaleDateString()}
//                   </div>
//                 )}

//                 <div className="flex items-center text-xs text-gray-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Created: {new Date(task.created_at).toLocaleString()}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//         <div className="flex space-x-3 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//           {!isEditing && (
//             <button
//               onClick={() => setIsEditing(true)}
//               className="text-blue-400 hover:text-blue-300 p-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
//               title="Edit task"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//               </svg>
//             </button>
//           )}
//           <button
//             onClick={() => onDelete(task.id)}
//             className="text-red-400 hover:text-red-300 p-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
//             title="Delete task"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </li>
//   );
// }

"use client"

import type { Task } from "@/lib/api"
import { useState } from "react"

interface TaskItemProps {
  task: Task
  onUpdate: (updatedTask: Task) => void
  onDelete: (taskId: number) => void
  onToggleCompletion: (taskId: number) => void
}

export default function TaskItem({ task, onUpdate, onDelete, onToggleCompletion }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description || "")
  const [priority, setPriority] = useState<"low" | "medium" | "high">(task.priority || "medium")
  const [tags, setTags] = useState(task.tags?.join(", ") || "")
  const [dueDate, setDueDate] = useState(task.due_date || "")

  const handleSave = () => {
    onUpdate({
      ...task,
      title,
      description,
      priority,
      tags: tags
        ? tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag)
        : [],
      due_date: dueDate || undefined,
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTitle(task.title)
    setDescription(task.description || "")
    setPriority(task.priority || "medium")
    setTags(task.tags?.join(", ") || "")
    setDueDate(task.due_date || "")
    setIsEditing(false)
  }

  const getPriorityColor = (p: string) => {
    switch (p) {
      case "high":
        return "bg-red-500/20 border-red-500/30 text-red-300"
      case "medium":
        return "bg-yellow-500/20 border-yellow-500/30 text-yellow-300"
      case "low":
        return "bg-green-500/20 border-green-500/30 text-green-300"
      default:
        return "bg-gray-500/20 border-gray-500/30 text-gray-300"
    }
  }

  return (
    <li className="p-6 hover:bg-neutral-800/30 transition-all duration-300 group border-b border-neutral-800/50 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start space-x-4 flex-1 min-w-0">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleCompletion(task.id)}
            className="mt-1 h-5 w-5 rounded-md border-2 border-neutral-600 bg-neutral-800 text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all duration-300"
          />
          <div className="flex-1 min-w-0">
            {isEditing ? (
              <div className="space-y-4 animate-fade-in">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 text-lg font-medium bg-neutral-800/70 border border-blue-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Task title"
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-800/70 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Task description (optional)"
                  rows={3}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
                    className="px-4 py-3 bg-neutral-800/70 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="px-4 py-3 bg-neutral-800/70 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-800/70 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tags (comma separated)"
                />
                <div className="flex space-x-3 pt-2">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 text-sm border border-neutral-600 hover:border-neutral-500 text-gray-300 rounded-lg font-semibold transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-3 gap-4">
                  <h3
                    className={`text-lg font-semibold transition-all duration-300 ${
                      task.completed ? "line-through text-gray-500" : "text-white"
                    }`}
                  >
                    {task.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap ${getPriorityColor(
                      task.priority || "medium",
                    )}`}
                  >
                    {task.priority?.charAt(0).toUpperCase() + task.priority?.slice(1)}
                  </span>
                </div>

                {task.description && (
                  <p className={`text-gray-300 mb-3 text-sm leading-relaxed ${task.completed ? "opacity-60" : ""}`}>
                    {task.description}
                  </p>
                )}

                {/* Display tags */}
                {task.tags && task.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {task.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-neutral-800 border border-neutral-700 text-gray-300 text-xs rounded-full hover:border-blue-500/50 transition-all duration-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Display due date if available */}
                {task.due_date && (
                  <div className="flex items-center text-sm text-gray-400 mb-2 gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Due:{" "}
                    {new Date(task.due_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                )}

                <div className="flex items-center text-xs text-gray-500 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Created: {new Date(task.created_at).toLocaleDateString()}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-blue-400 hover:text-blue-300 rounded-md hover:bg-neutral-700/50 transition-all duration-200"
              title="Edit task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          )}
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-red-400 hover:text-red-300 rounded-md hover:bg-neutral-700/50 transition-all duration-200"
            title="Delete task"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  )
}
