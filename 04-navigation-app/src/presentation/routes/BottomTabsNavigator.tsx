import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        sceneStyle: {
          backgroundColor: globalColors.background,
        },
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab 1',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab1</Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab 2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab2</Text>,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab 3</Text>,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
