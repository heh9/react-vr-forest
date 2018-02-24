import React from 'react';
import {
  View,
  Cylinder,
  Sphere
} from 'react-vr';

export default ({position, height, crownColor, treeColor}) => {
  return (
    <View>
      <Sphere
        radius={3}
        widthSegments={10}
        heightSegments={10}
        style={{
          color: crownColor,
          opacity: Math.random(),
          transform: [{translate: [position[0], position[1] + height / 2, position[2]]}]
        }}
      />
      <Cylinder
        radiusTop={0.3}
        radiusBottom={0.5}
        dimHeight={height}
        segments={10}
        style={{
          color: treeColor,
          opacity: Math.random() * 0.5 + 0.5,
          transform: [{translate: position}]
        }}
      />
    </View>
  );
}