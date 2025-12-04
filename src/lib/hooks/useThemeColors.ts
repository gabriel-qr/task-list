import { useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

export const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return {
    colors,
    isDark: colorScheme === 'dark',
    colorScheme: colorScheme || 'light',
  };
};
