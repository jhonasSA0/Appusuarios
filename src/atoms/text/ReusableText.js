import React from 'react';
import { Text as Txt } from 'react-native';
export default function ReusableText({
    fontSize = 14,
    fontWeight = 'normal',
    color = 'black',
    style,
    children,
}) {
  return (
    <Txt
    style={{ fontSize, fontWeight, color, ...style }}
    >
      {children}
    </Txt>
  );
};