import { View, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButtons } from '../components/CalculatorButtons';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      <View style={styles.row}>
        <CalculatorButtons label="C" blackText color={colors.lightGray} />
        <CalculatorButtons label="+/-" blackText color={colors.lightGray} />
        <CalculatorButtons label="del" blackText color={colors.lightGray} />
        <CalculatorButtons label="/" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButtons label="7" />
        <CalculatorButtons label="8" />
        <CalculatorButtons label="9" />
        <CalculatorButtons label="x" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButtons label="4" />
        <CalculatorButtons label="5" />
        <CalculatorButtons label="6" />
        <CalculatorButtons label="-" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButtons label="1" />
        <CalculatorButtons label="2" />
        <CalculatorButtons label="3" />
        <CalculatorButtons label="+" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButtons label="0" doubleSize />
        <CalculatorButtons label="." />
        <CalculatorButtons label="=" color={colors.orange} />
      </View>
    </View>
  );
};
