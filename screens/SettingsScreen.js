import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        theme === 'dark' && styles.darkContainer
      ]}
    >
      <Text style={styles.text}>
        Current Theme: {theme}
      </Text>

      <Pressable style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>
          Toggle Theme
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  darkContainer: {
    backgroundColor: '#111'
  },
  text: {
    fontSize: 18,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#4f46e5',
    padding: 12,
    borderRadius: 6
  },
  buttonText: {
    color: '#fff'
  }
});

