import { TaskInfoProvider } from '@/contexts/TaskContext';
import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
    <TaskInfoProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
      </Stack>
    </TaskInfoProvider>
  );
}
