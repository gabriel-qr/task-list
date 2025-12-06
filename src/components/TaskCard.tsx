import { useTaskContext } from '@/contexts/TaskContext';
import { useThemeColors } from '@/contexts/ThemeContext';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import CircleCheck from './CircleCheck';
import StatusTag from './StatusTag';

interface TaskCardProps {
  id: number;
  title: string;
  createdAt: string;
  status: string;
  priority: 'high' | 'medium' | 'low' | null;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, createdAt, status, priority }) => {
  const [isComplete, setIsComplete] = useState(status === 'complete');
  const { colors } = useThemeColors();
  const { deleteTask, toggleTaskStatus } = useTaskContext();

  const getBorderColor = () => {
    const priorityColors = {
      high: colors.priorityHigh,
      medium: colors.priorityMedium,
      low: colors.priorityLow,
    };

    return priorityColors[priority!];
  };

  const handlePressCheckCircle = () => {
    setIsComplete((previousState) => !previousState);
    toggleTaskStatus(id);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteTask(id),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderLeftColor: getBorderColor(),
          borderColor: colors.mutedForeground,
        },
      ]}
    >
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <Pressable onPress={() => handlePressCheckCircle()}>
          <CircleCheck isComplete={isComplete} />
        </Pressable>
        <View style={styles.leftSection}>
          <View style={styles.taskInfoContainer}>
            <Text
              style={[
                styles.title,
                {
                  color: colors.cardForeground,
                  textDecorationLine: isComplete ? 'line-through' : 'none',
                  fontWeight: isComplete ? '400' : '600',
                },
              ]}
            >
              {title}
            </Text>
            <Text style={[styles.dateText, { color: colors.mutedForeground }]}>
              Created at {createdAt}
            </Text>
            <Text style={[styles.priorityText, { color: getBorderColor() }]}>
              Priority: {priority}
            </Text>
          </View>
          <StatusTag isComplete={isComplete} />
        </View>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Feather name='trash-2' size={25} color={colors.priorityHigh} onPress={handleDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    borderLeftWidth: 8,
    borderWidth: 1.5,
    borderRadius: 16,
  },

  leftSection: {
    gap: 16,
  },

  taskInfoContainer: {
    gap: 4,
  },

  title: {
    fontSize: 18,
  },

  dateText: {
    fontSize: 14,
  },

  priorityText: {
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'capitalize',
  },
});

export default TaskCard;
