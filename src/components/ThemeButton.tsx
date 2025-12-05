import { useThemeColors } from '@/contexts/ThemeContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const ThemeButton: React.FC = () => {
  const { colors, handleThemeChange, colorScheme } = useThemeColors();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleThemeChange}>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.accent, borderColor: colors.mutedForeground },
        ]}
      >
        {colorScheme === 'dark' ? (
          <AntDesign name='sun' size={18} color={colors.accentForeground} />
        ) : (
          <AntDesign name='moon' size={18} color={colors.accentForeground} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ThemeButton;
