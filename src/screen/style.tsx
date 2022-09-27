import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  halfCircle: ViewStyle;
}

export default StyleSheet.create<Style>({
  halfCircle: {
    width: '50%',
    height: '50%',
    
    borderWidth: 2,
    borderTopLeftRadius: 27.5,
    borderTopRightRadius: 27.5,
    borderColor: 'red',
  },
});
