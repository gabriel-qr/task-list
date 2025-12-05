import { useThemeColors } from '@/contexts/ThemeContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CircleCheckProps {
  isComplete: boolean;
}

const CircleCheck: React.FC<CircleCheckProps> = ({ isComplete }) => {
  const { colors } = useThemeColors();
  const bgcolor = !isComplete ? colors.statusIncomplete : colors.statusComplete;
  const bdcolor = !isComplete ? colors.mutedForeground : colors.statusComplete;
  const bdwidth = !isComplete ? 2 : 0;

  return (
    <View
      style={[
        styles.container,
        { borderWidth: bdwidth, backgroundColor: bgcolor, borderColor: bdcolor },
      ]}
    >
      {isComplete && <AntDesign name='check' size={14} color={'#f8f8f8'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleCheck;
