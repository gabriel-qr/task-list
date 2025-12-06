import { useThemeColors } from '@/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CounterProps {
  value: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ value, label }) => {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.counterText, { color: colors.ring }]}>{value}</Text>
      <Text style={[styles.labelText, { color: colors.cardForeground }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
    paddingVertical: 20,
    borderRadius: 16,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  counterText: {
    fontWeight: '600',
    fontSize: 30,
  },

  labelText: {
    fontWeight: '400',
    fontSize: 14,
    textTransform: 'capitalize',
  },
});

export default Counter;
