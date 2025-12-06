import AddTask from '@/components/AddTask';
import Counter from '@/components/Counter';
import TaskCard from '@/components/TaskCard';
import ThemeButton from '@/components/ThemeButton';
import { toastConfig } from '@/components/ToastConfig';
import { useTaskContext } from '@/contexts/TaskContext';
import { useThemeColors } from '@/contexts/ThemeContext';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export default function Index() {
  const { taskList, loading, completedTasks, incompleteTasks, totalTasks } = useTaskContext();
  const { colors } = useThemeColors();

  if (loading) {
    return (
      <View style={[styles.loadingState, { backgroundColor: colors.background }]}>
        <ActivityIndicator size={'large'} color={colors.foreground} />
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.textHeader, { color: colors.foreground }]}>Task Manager</Text>
          <ThemeButton />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Counter value={totalTasks} label='Total' />
          <Counter value={completedTasks} label='Completed' />
          <Counter value={incompleteTasks} label='Incomplete' />
        </View>
        <AddTask />
        <FlatList
          style={{ flex: 1 }}
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
  loadingState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    gap: 25,
    padding: '5%',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textHeader: {
    fontSize: 24,
    fontWeight: '900',
  },

  tasksContainer: {
    gap: 12,
    paddingBottom: 20,
    paddingTop: 20,
  },
});
