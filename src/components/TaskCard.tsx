import { useTaskContext } from '@/contexts/TaskContext';
import { useThemeColors } from '@/lib/hooks/useThemeColors';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
  const { deleteTask } = useTaskContext();

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
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.card, borderLeftColor: getBorderColor() },
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
          </View>
          <StatusTag isComplete={isComplete} />
        </View>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Feather
          name='trash-2'
          size={25}
          color={colors.priorityHigh}
          onPress={() => deleteTask(id)}
        />
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
    borderLeftWidth: 5,
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
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
});

export default TaskCard;
