import { Colors } from '@/lib/constants/colors';
import { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  colors: typeof Colors.light;
  colorScheme: 'light' | 'dark';
  handleThemeChange: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(
    systemColorScheme || 'light'
  );

  const colors = Colors[selectedTheme];

  const handleThemeChange = () => {
    setSelectedTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ colors, colorScheme: selectedTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeColors = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTaskContext must be used within TaskInfoProvider');
  }
  return context;
};
