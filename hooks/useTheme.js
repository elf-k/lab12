import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const stored = await AsyncStorage.getItem('theme');
        if (stored) {
          setTheme(stored);
        }
      } catch (e) {
        console.log('Failed to load theme');
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    await AsyncStorage.setItem('theme', nextTheme);
  };

  return { theme, toggleTheme };
}
