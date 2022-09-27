import React from 'react';
import {View} from 'react-native';
import Speedometer from '../CustomComponent';

export default function MeterView() {
  return <Speedometer value={40} totalValue={100} showIndicator showPercent />;
}
