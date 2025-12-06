import useStorage from '@/lib/hooks/useStorage';
import React, { createContext, useContext, useEffect, useState } from 'react';

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
  loading: boolean;
  totalTasks: number;
  completedTasks: number;
  incompleteTasks: number;
  toggleTaskStatus: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getItem, saveItem } = useStorage();

  const [taskList, setTaskList] = useState<TaskInfoType[]>([]);
  const [loading, setLoading] = useState(false);

  const totalTasks = taskList.length;
  const completedTasks = taskList.filter((task) => task.status === 'complete').length;
  const incompleteTasks = totalTasks - completedTasks;
  console.log(
    `Total: ${totalTasks}, Completas: ${completedTasks}, Incompletas: ${incompleteTasks}`
  );

  const loadTasks = async () => {
    setLoading(true);
    const tasks = await getItem('@taskList');
    setTaskList(tasks);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task: TaskInfoType) => {
    const newList = [task, ...taskList];
    setTaskList(newList);
    await saveItem('@taskList', newList);
  };

  const deleteTask = async (taskId: number) => {
    const newList = taskList.filter((task) => task.id !== taskId);
    setTaskList(newList);
    await saveItem('@taskList', newList);
  };

  const toggleTaskStatus = async (taskId: number) => {
    const newList = taskList.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === 'complete' ? 'incomplete' : 'complete' }
        : task
    );
    setTaskList(newList);
    await saveItem('@taskList', newList);
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        addTask,
        deleteTask,
        loading,
        totalTasks,
        completedTasks,
        incompleteTasks,
        toggleTaskStatus,
      }}
    >
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
