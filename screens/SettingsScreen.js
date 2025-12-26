import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SettingsScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Settings for {user?.username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 }
});

