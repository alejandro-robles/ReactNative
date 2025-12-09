import { ActivityIndicator, Animated, ImageStyle, View } from 'react-native';
import { StyleProp } from 'react-native/types_generated/index';
import { useAnimation } from '../../hooks/useAnimation';
import { useState } from 'react';

interface Prpos {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Prpos) => {
  const { animatedOpacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color="grey"
          size={30}
        />
      )}

      <Animated.Image
        source={{ uri }}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
        style={[style, { opacity: animatedOpacity }]}
      />
    </View>
  );
};
