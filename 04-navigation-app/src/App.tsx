import { Text } from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <Text>
        <HomeScreen />
      </Text>
    </NavigationContainer>
  );
};
