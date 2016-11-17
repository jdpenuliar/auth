import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// TouchableHighlight
// TouchableNativeFeedback
// TouchableOpacity
// TouchableWithoutFeedback

//prop should always be and object.
//https://facebook.github.io/react-native/docs/touchableopacity.html
const Button = ({ onPressProp, children }) => {
     const { buttonStyle, textStyle } = styles;
     return (
          //when button from parent component, it will execute onPress which will
          //run the fat error function;
          <TouchableOpacity onPress={onPressProp} style={buttonStyle}>
               <Text style={textStyle}>
                    {children}
               </Text>
          </TouchableOpacity>
     );
};

const styles = {
     textStyle: {
          alignSelf: 'center',
          color: '#007aff',
          fontSize: 16,
          fontWeight: '600',
          paddingTop: 10,
          paddingBottom: 10
     },
     buttonStyle: {
          flex: 1,
          alignSelf: 'stretch',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#007aff',
          marginLeft: 5,
          marginRight: 5,
     }
};

// export default Button;
export { Button };
