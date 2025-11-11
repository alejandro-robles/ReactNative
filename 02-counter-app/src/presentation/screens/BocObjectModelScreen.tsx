import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}>
        <Text style={{ color: 'white' }}>BoxObjectScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5,
  },
});
