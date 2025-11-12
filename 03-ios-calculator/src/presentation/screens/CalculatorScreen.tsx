import { View, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButtons } from '../components/CalculatorButtons';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const { number, buildNumber } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {number}
        </Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButtons
          onPress={() => console.log('C')}
          label="C"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButtons
          onPress={() => console.log('+/-')}
          label="+/-"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButtons
          onPress={() => console.log('del')}
          label="del"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButtons
          onPress={() => console.log('/')}
          label="/"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButtons onPress={() => buildNumber('7')} label="7" />
        <CalculatorButtons onPress={() => buildNumber('8')} label="8" />
        <CalculatorButtons onPress={() => buildNumber('9')} label="9" />
        <CalculatorButtons
          onPress={() => console.log('X')}
          label="x"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButtons onPress={() => buildNumber('4')} label="4" />
        <CalculatorButtons onPress={() => buildNumber('5')} label="5" />
        <CalculatorButtons onPress={() => buildNumber('6')} label="6" />
        <CalculatorButtons
          onPress={() => console.log('-')}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButtons onPress={() => buildNumber('1')} label="1" />
        <CalculatorButtons onPress={() => buildNumber('2')} label="2" />
        <CalculatorButtons onPress={() => buildNumber('3')} label="3" />
        <CalculatorButtons
          onPress={() => console.log('+')}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButtons
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButtons onPress={() => buildNumber('.')} label="." />
        <CalculatorButtons
          onPress={() => console.log('=')}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
