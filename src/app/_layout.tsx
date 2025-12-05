import { TaskInfoProvider } from '@/contexts/TaskContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function Layout() {
  return (
    <TaskInfoProvider>
      <ThemeProvider>
        <StatusBar barStyle={'default'} />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='index' />
        </Stack>
      </ThemeProvider>
    </TaskInfoProvider>
  );
}
