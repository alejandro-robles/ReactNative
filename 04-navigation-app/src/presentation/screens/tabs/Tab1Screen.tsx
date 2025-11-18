import { Text, View } from 'react-native';
import { HamburgerMenu } from './HamburgerMenu';
import { Ionicons } from '@react-native-vector-icons/ionicons';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text> Tab1Screen</Text>
      <Ionicons name="rocket" size={30} />
    </View>
  );
};
