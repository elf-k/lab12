import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user?.username}</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Go to Settings</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.logout]}
        onPress={() => {
          logout();
          navigation.replace('Login');
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
  button: { padding: 12, borderRadius: 6, backgroundColor: '#4f46e5', marginTop: 10 },
  logout: { backgroundColor: '#dc2626' },
  buttonText: { color: '#fff' }
});

