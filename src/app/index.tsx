import TaskCard from '@/components/TaskCard';
import { useThemeColors } from '@/lib/hooks/useThemeColors';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { colors } = useThemeColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Text style={{ color: colors.foreground }}>WELCOME</Text>
        <TaskCard status='incomplete' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '5%',
  },
});
