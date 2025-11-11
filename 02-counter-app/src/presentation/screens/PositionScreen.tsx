import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'relative',
    top: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    position: 'relative',
    top: 0,
  },
});
