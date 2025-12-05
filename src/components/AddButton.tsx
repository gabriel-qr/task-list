import { useThemeColors } from '@/lib/hooks/useThemeColors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AddButtonProps {
  onPress?: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  const { colors } = useThemeColors();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.primary,
          },
        ]}
      >
        <View style={{ gap: 10, flexDirection: 'row' }}>
          <Text style={[styles.text, { color: colors.primaryForeground }]}>+</Text>
          <Text style={[styles.text, { color: colors.primaryForeground }]}>Add Task</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 14,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default AddButton;
