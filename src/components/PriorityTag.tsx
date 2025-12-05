import { useThemeColors } from '@/lib/hooks/useThemeColors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PriorityTagProps {
  selected: 'high' | 'medium' | 'low' | null;
  id: 'high' | 'medium' | 'low';
  onPress?: () => void;
}

const PriorityTag: React.FC<PriorityTagProps> = ({ id, selected, onPress }) => {
  const { colors } = useThemeColors();

  const getIsSelected = (selectedPriority: string | null) => {
    if (selectedPriority === id) {
      return true;
    } else {
      return false;
    }
  };
  const isSelected = getIsSelected(selected);

  const getBgColor = () => {
    const priorityColors = {
      high: colors.priorityHigh,
      medium: colors.priorityMedium,
      low: colors.priorityLow,
    };

    return isSelected ? priorityColors[id] : colors.accent;
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, { backgroundColor: getBgColor() }]}>
        <Text style={[styles.text, { color: colors.white }]}>{id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: '700',
    fontSize: 15,
    textTransform: 'capitalize',
  },
});

export default PriorityTag;
