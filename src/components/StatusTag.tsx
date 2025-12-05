import { useThemeColors } from '@/lib/hooks/useThemeColors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StatusTagProps {
  isComplete: boolean;
}

const StatusTag: React.FC<StatusTagProps> = ({ isComplete }) => {
  const { colors } = useThemeColors();
  const txtcolor = !isComplete ? colors.mutedForeground : colors.ring;
  const text = isComplete ? 'Complete' : 'Incomplete';

  return (
    <View style={[styles.container, { backgroundColor: colors.secondary }]}>
      <Text style={[styles.statusText, { color: txtcolor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    paddingHorizontal: 15,
    borderRadius: 16,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusText: {
    fontWeight: '600',
    fontSize: 14,
  },
});

export default StatusTag;
