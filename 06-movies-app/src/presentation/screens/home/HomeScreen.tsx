import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {} = useMovies();
  return (
    <View>
      <Text style={{ paddingTop: 50 }}>HomeScreen</Text>
    </View>
  );
};
