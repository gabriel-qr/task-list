import React, { createContext, useContext, useState } from 'react';

interface TaskInfoType {
  id: number;
  title: string;
  createdAt: string;
  status: string;
  priority: 'high' | 'medium' | 'low' | null;
}

interface TaskContextType {
  taskList: TaskInfoType[];
  addTask: (task: TaskInfoType) => void;
  deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [taskList, setTaskList] = useState<TaskInfoType[]>([]);
  const addTask = (task: TaskInfoType) => {
    setTaskList((prev) => [task, ...prev]);
  };

  const deleteTask = (taskId: number) => {
    setTaskList((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within TaskInfoProvider');
  }
  return context;
};
