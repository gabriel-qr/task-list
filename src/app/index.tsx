import AddTask from '@/components/AddTask';
import TaskCard from '@/components/TaskCard';
import { toastConfig } from '@/components/ToastConfig';
import { useTaskContext } from '@/contexts/TaskContext';
import { useThemeColors } from '@/lib/hooks/useThemeColors';
import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export default function Index() {
  const { colors } = useThemeColors();
  const { taskList } = useTaskContext();

  useEffect(() => {
    console.log(taskList.length);
  }, [taskList]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        <Text style={{ color: colors.foreground }}>WELCOME</Text>
        <AddTask />
        <FlatList
          contentContainerStyle={styles.tasksContainer}
          data={taskList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TaskCard
              id={item.id}
              title={item.title}
              createdAt={item.createdAt}
              status={item.status}
              priority={item.priority}
            />
          )}
        />
      </View>
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    // flex: 1,
    gap: 25,
    alignItems: 'center',
    padding: '5%',
  },

  tasksContainer: {
    gap: 12,
  },
});
