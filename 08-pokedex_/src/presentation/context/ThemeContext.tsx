import { createContext, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const ThemeContext = createContext({
  isDark: false,
  theme: LightTheme,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = isDark ? DarkTheme : LightTheme;

  return (
    // TODO: Fix problem with:
    // <PaperProvider theme={theme}>
    <PaperProvider>
      <NavigationContainer theme={theme}>
        <ThemeContext.Provider value={{ isDark, theme }}>
          {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};
