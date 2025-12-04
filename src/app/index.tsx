import { Colors } from '@/lib/constants/colors';
import { StyleSheet, Text, View } from 'react-native';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.dark.primary }}>WELCOME</Text>
      {/* <TaskCard /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
