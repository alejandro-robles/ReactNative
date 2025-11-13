import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = '*',
  divide = '/',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubresult();
    setPreviousNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
    lastOperation.current = undefined;
    setFormula('');
  };

  const deleteOperation = () => {
    let currentSign = '';
    let tempNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      return setNumber(currentSign + tempNumber.slice(0, -1));
    }
    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal point
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const mutiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const result = calculateSubresult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPreviousNumber('0');
  };

  const calculateSubresult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    // Properties
    number,
    previousNumber,
    formula,

    // Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    mutiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};
