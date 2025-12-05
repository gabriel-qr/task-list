import { getFormattedDate } from '@/lib/functions/timeFuntions';
import { useThemeColors } from '@/lib/hooks/useThemeColors';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CircleCheck from './CircleCheck';
import StatusTag from './statusTag';

interface TaskCardProps {
  label?: string;
  priority?: string;
  status: 'complete' | 'incomplete';
}

const TaskCard: React.FC<TaskCardProps> = ({
  label = 'Design new landing page',
  priority = 'Medio',
  status,
}) => {
  const [isComplete, setIsComplete] = useState(status === 'complete');
  const { colors } = useThemeColors();

  const formattedDate = getFormattedDate();

  const handlePressCheckCircle = () => {
    setIsComplete((previousState) => !previousState);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.card, borderLeftColor: colors.priorityHigh },
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
                styles.label,
                {
                  color: colors.cardForeground,
                  textDecorationLine: isComplete ? 'line-through' : 'none',
                  fontWeight: isComplete ? '400' : '600',
                },
              ]}
            >
              {label}
            </Text>
            <Text style={[styles.dateText, { color: colors.mutedForeground }]}>
              Created at {formattedDate}
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
          onPress={() => console.log('teste')}
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

  label: {
    fontSize: 18,
  },

  dateText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
});

export default TaskCard;
