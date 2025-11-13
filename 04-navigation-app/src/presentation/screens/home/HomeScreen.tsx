import { Pressable, Text, View } from 'react-native';
import { globalSyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalSyles.container}>
      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalSyles.primaryButton}
      >
        <Text style={globalSyles.buttonText}> Productos </Text>
      </Pressable> */}

      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label="Productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Settings"
      />
    </View>
  );
};
