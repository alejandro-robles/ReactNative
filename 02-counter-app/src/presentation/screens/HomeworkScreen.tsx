import { View, StyleSheet } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    // Task 2
    // justifyContent: 'center',

    // Task 3
    // justifyContent: 'center',

    // Task 4
    // justifyContent: 'space-between',
    // alignItems: 'center',

    // Task 5
    // flexDirection: 'row',
    // justifyContent: 'space-between',

    // Task 7, 8, 9
    // justifyContent: 'center',
    // alignItems: 'center',

    // Task 10
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  box: {
    // Task 6 comment out width and height
    width: 100,
    // Task 5 comment out height
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: 'purple',
    // Task 3
    // alignSelf: 'flex-end',

    // Task 4
    // alignSelf: 'flex-end',

    // Task 6
    // flex: 1,

    // Task 9
    // top: 100,
  },

  orangeBox: {
    backgroundColor: 'orange',

    // Task 1
    // flex: 1,
    // Task 6
    // flex: 1,

    // Task 8 and 9
    // right: -100,

    // Task 10
    // top: 50,
  },
  blueBox: {
    backgroundColor: 'blue',
    // Task 2
    // width: '100%',

    // Taks 3
    // alignSelf: 'center',

    // Task 4
    // alignSelf: 'flex-start',
    // Task 6
    // flex: 2,
  },
});
