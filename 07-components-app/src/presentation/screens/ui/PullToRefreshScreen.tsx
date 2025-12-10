import { RefreshControl, ScrollView } from 'react-native';
import { Title } from '../../components/ui/Title';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { top } = useSafeAreaInsets();
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'green', 'orange']}
          progressBackgroundColor={colors.cardBackground}
          onRefresh={onRefresh}
          tintColor={'red'}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
      <Title text="Pull to refresh" safe />
    </ScrollView>
  );
};
