import { Text, View } from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';

export const App = () => {
  return (
    <View>
      <Text>
        <HomeScreen />
      </Text>
    </View>
  );
};
