import React, { useRef} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

export default function ReusableBannerTwo ({ color = '#7C99FF', size = 70, direction = 'bottom' })  {
    const screenWidth = Dimensions.get('window').width;
    const styleToBanner =
      direction === 'bottom'
        ? {
            borderTopLeftRadius: screenWidth * 0.4,
            borderTopRightRadius: screenWidth * 0.4,
            bottom: 0,
            height: `${size}%`,
          }
        : {
            borderBottomLeftRadius: screenWidth * 0.1,
            borderBottomRightRadius: screenWidth * 0.1,
            top: 0,
            height: `${size}%`,
          };
    const styles = StyleSheet.create({
      banner: {
        position: 'absolute',
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        ...styleToBanner,
      },
    });
    return (
      <View style={[styles.banner, { width: screenWidth }]}>
        {/* Contenido del banner */}
      </View>
    );
  };