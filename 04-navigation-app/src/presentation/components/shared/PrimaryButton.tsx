import { Pressable, Text } from 'react-native';
import { globalSyles } from '../../theme/theme';

interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({ onPress, label }: Props) => {
  return (
    <Pressable onPress={() => onPress()} style={globalSyles.primaryButton}>
      <Text style={globalSyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
