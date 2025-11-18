import { Text } from 'react-native';
import { BottomTabNavigator } from './presentation/navigators/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const Main = () => {
  return (
    <NavigationContainer>
      <Text>Hola Mundo!!!</Text>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
