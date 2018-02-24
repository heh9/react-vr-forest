import React from 'react';
import {
  AppRegistry,
  View,
  Pano,
  asset
} from 'react-vr';

import Forest from './components/Forest';

export default class rvr_forest extends React.Component {
  render() {
    return (
      <View>
        <Forest
          trees={80}
          perimeter={100}
          crownColors={['#016549', '#87b926', '#b1c96b']}
          treeColors={['#533118', '#624e2c', '#8d6815']}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('rvr_forest', () => rvr_forest);
