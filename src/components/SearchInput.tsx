import { useThemeColors } from '@/contexts/ThemeContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

interface SearchInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText, ...props }) => {
  const { colors } = useThemeColors();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.secondary, borderColor: colors.mutedForeground },
      ]}
    >
      <Ionicons
        name='search-outline'
        size={18}
        color={colors.mutedForeground}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={colors.mutedForeground}
        style={[styles.searchInput, { color: colors.white }]}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
  icon: {
    marginLeft: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 15,
  },
});

export default SearchInput;
