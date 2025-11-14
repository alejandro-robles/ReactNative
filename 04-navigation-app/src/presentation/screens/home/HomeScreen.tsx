import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import {
  DrawerActions,
  type NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <Text> Menu </Text>
        </Pressable>
      ),
    });
  });

  return (
    <View style={globalStyles.container}>
      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalSyles.primaryButton}
      >
        <Text style={globalSyles.buttonText}> Productos </Text>
      </Pressable> */}

      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
