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
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getItem, saveItem } = useStorage();

  const [taskList, setTaskList] = useState<TaskInfoType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      const tasks = await getItem('@taskList');
      setTaskList(tasks);
      setLoading(false);
    };
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

  return (
    <TaskContext.Provider value={{ taskList, addTask, deleteTask, loading }}>
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
