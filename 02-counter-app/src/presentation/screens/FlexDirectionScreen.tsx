import { StyleSheet, View } from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'green',
    // top: -100,
  },
  box2: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: 'red',
    alignSelf: 'center',
    // top: 100,
  },
});
