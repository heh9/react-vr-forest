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
        <Pano source={asset('bg.png')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('rvr_forest', () => rvr_forest);
