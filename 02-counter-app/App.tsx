import { SafeAreaView } from 'react-native-safe-area-context';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
// import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import { Ionicons } from '@react-native-vector-icons/ionicons';
// import { BoxObjectModelScreen } from './src/presentation/screens/BocObjectModelScreen';
// import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
// import { PositionScreen } from './src/presentation/screens/PositionScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <Ionicons {...props} />,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Alejandro Robles" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        <FlexDirectionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
