import AsyncStorage from '@react-native-async-storage/async-storage';

interface TaskInfoType {
  id: number;
  title: string;
  createdAt: string;
  status: string;
  priority: 'high' | 'medium' | 'low' | null;
}

const useStorage = () => {
  const getItem = async (key: string) => {
    try {
      const tasks = await AsyncStorage.getItem(key);

      return tasks ? JSON.parse(tasks) : [];
    } catch (err) {
      console.log('Erro ao buscar. ', err);
      return [];
    }
  };

  const saveItem = async (key: string, value: any) => {
    try {
      const jsonTasks = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonTasks);
    } catch (err) {
      console.log('Erro ao buscar. ', err);
      return;
    }
  };

  return {
    getItem,
    saveItem,
  };
};

export default useStorage;
