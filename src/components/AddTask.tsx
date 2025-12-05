import { useTaskContext } from '@/contexts/TaskContext';
import { getFormattedDate } from '@/lib/functions/timeFuntions';
import { useThemeColors } from '@/lib/hooks/useThemeColors';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';
import AddButton from './AddButton';
import PriorityTag from './PriorityTag';

interface AddTaskProps {
  isComplete?: boolean;
}

interface PriorityValues {
  key: string;
  value: 'high' | 'medium' | 'low';
}

interface Task {
  id: number;
  title: string;
  createdAt: string;
  status: string;
  priority: 'high' | 'medium' | 'low' | null;
}

const AddTask: React.FC<AddTaskProps> = () => {
  const { colors } = useThemeColors();
  const { addTask } = useTaskContext();
  const [task, setTask] = useState<string>('');
  const [selected, setSelected] = useState<'high' | 'medium' | 'low' | null>(null);

  const priorityValues: PriorityValues[] = [
    { key: 'high', value: 'high' },
    { key: 'medium', value: 'medium' },
    { key: 'low', value: 'low' },
  ];

  const handlePressTag = (value: PriorityValues) => {
    setSelected(value.value);
  };

  const handleAddTask = (description: string, priority: 'high' | 'medium' | 'low' | null) => {
    const newTask = {
      id: Date.now(),
      title: description,
      createdAt: getFormattedDate(),
      status: 'incomplete',
      priority: priority,
    };

    if (description !== '' && priority !== null) {
      addTask(newTask);
      setTask('');
      setSelected(null);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Insert a task description and choose a priority level!',
        position: 'bottom',
        autoHide: true,
        visibilityTime: 2500,
        swipeable: false,
      });
      return;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.secondary,
          borderColor: colors.mutedForeground,
        },
      ]}
    >
      <TextInput
        style={[
          styles.inputContainer,
          { borderColor: colors.mutedForeground, color: colors.secondaryForeground, fontSize: 14 },
        ]}
        placeholder='Add new task...'
        placeholderTextColor={colors.mutedForeground}
        value={task}
        onChangeText={setTask}
      />
      <View style={styles.pirorityContainer}>
        <Text style={[styles.statusText, { color: colors.mutedForeground }]}> Priority:</Text>
        {priorityValues.map((priority) => {
          return (
            <PriorityTag
              key={priority.key}
              selected={selected}
              id={priority.value}
              onPress={() => handlePressTag(priority)}
            />
          );
        })}
      </View>
      <AddButton onPress={() => handleAddTask(task, selected)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    gap: 14,
    borderWidth: 1,
    borderRadius: 25,
  },

  pirorityContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },

  inputContainer: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 16,
  },

  statusText: {
    fontWeight: '600',
    fontSize: 14,
  },
});

export default AddTask;
