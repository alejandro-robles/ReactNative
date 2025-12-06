import { Alert, View } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('onDismiss');
        },
      },
    );

  const showPrompt = () => {
    Alert.prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      (valor: string) => console.log('password: ', valor),
      'secure-text',
      'Im the default value',
      'number-pad',
    );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />
      <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
      <View style={{ height: 10 }} />
      <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
      <View style={{ height: 10 }} />
      <Button text="Prompt - Input" onPress={showPrompt} />
    </CustomView>
  );
};
