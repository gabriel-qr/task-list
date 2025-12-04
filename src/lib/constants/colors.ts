export const Colors = {
  light: {
    background: 'rgb(249, 250, 251)',
    foreground: 'rgb(31, 41, 55)',
    card: 'rgb(255, 255, 255)',
    cardForeground: 'rgb(31, 41, 55)',
    primary: 'rgb(10, 77, 60)',
    primaryForeground: 'rgb(255, 255, 255)',
    secondary: 'rgb(243, 244, 246)',
    secondaryForeground: 'rgb(31, 41, 55)',
    muted: 'rgb(243, 244, 246)',
    mutedForeground: 'rgb(107, 114, 128)',
    accent: 'rgb(236, 253, 245)',
    accentForeground: 'rgb(6, 78, 59)',
    border: 'rgb(229, 231, 235)',
    input: 'rgb(229, 231, 235)',
    ring: 'rgb(10, 77, 60)',

    // Priority Colors
    priorityHigh: 'rgb(239, 68, 68)',
    priorityHighBg: 'rgb(254, 242, 242)',
    priorityMedium: 'rgb(245, 158, 11)',
    priorityMediumBg: 'rgb(254, 252, 232)',
    priorityLow: 'rgb(34, 197, 94)',
    priorityLowBg: 'rgb(240, 253, 244)',

    // Status Colors
    statusComplete: 'rgb(34, 197, 94)',
    statusIncomplete: 'rgb(156, 163, 175)',
    destructive: 'rgb(239, 68, 68)',
    destructiveForeground: 'rgb(255, 255, 255)',
  },

  dark: {
    background: 'rgb(17, 24, 39)',
    foreground: 'rgb(243, 244, 246)',
    card: 'rgb(31, 41, 55)',
    cardForeground: 'rgb(243, 244, 246)',
    primary: 'rgb(16, 185, 129)',
    primaryForeground: 'rgb(17, 24, 39)',
    secondary: 'rgb(55, 65, 81)',
    secondaryForeground: 'rgb(243, 244, 246)',
    muted: 'rgb(55, 65, 81)',
    mutedForeground: 'rgb(156, 163, 175)',
    accent: 'rgb(31, 41, 55)',
    accentForeground: 'rgb(110, 231, 183)',
    border: 'rgb(55, 65, 81)',
    input: 'rgb(55, 65, 81)',
    ring: 'rgb(16, 185, 129)',

    // Priority Colors (adjusted for dark theme)
    priorityHigh: 'rgb(248, 113, 113)',
    priorityHighBg: 'rgb(69, 26, 26)',
    priorityMedium: 'rgb(251, 191, 36)',
    priorityMediumBg: 'rgb(69, 46, 15)',
    priorityLow: 'rgb(74, 222, 128)',
    priorityLowBg: 'rgb(20, 50, 33)',

    // Status Colors
    statusComplete: 'rgb(74, 222, 128)',
    statusIncomplete: 'rgb(107, 114, 128)',
    destructive: 'rgb(248, 113, 113)',
    destructiveForeground: 'rgb(17, 24, 39)',
  },
};

// Type para garantir type safety
export type ColorScheme = keyof typeof Colors;
export type ColorName = keyof typeof Colors.light;
