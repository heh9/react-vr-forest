import React from 'react';
import {
  View,
} from 'react-vr';

import Tree from './Tree';

export default ({trees, perimeter, crownColors, treeColors}) => {
  return (
    <View>
      {Array.apply(null, {length: trees}).map((obj, i) => {
        const theta = (Math.PI / 180) * (i / trees) * 360,
              randomSeed = Math.random(),
              treeDistance = randomSeed * perimeter + 10,
              treeColor = Math.floor(randomSeed * 3);
        const x = Math.cos(theta) * treeDistance,
              z = Math.sin(theta) * treeDistance;
        const treeScale = 2 + Math.random();

        return (
          <Tree
            key={i}
            position={[x, 0, z]}
            height={Math.random() * 10 + 4}
            crownColor={crownColors[treeColor]}
            treeColor={treeColors[treeColor]}
          />
        );
      })}
    </View>
  );
}