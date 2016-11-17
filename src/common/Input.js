import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
const Input = ({ labelTextProp, value, onChangeText, placeHolderProp,secureTextEntryProp }) => {
     const { inputStyle, labelStyle, containerStyle } = styles
     return (
          <View style={containerStyle}>
               <Text style={labelStyle}>{labelTextProp}</Text>
               <TextInput
                    autoCorrect={false}
                    placeholder={placeHolderProp}
                    style={inputStyle}
                    value = {value}
                    secureTextEntry={secureTextEntryProp}
                                   //argument text before =>
                    onChangeText = {onChangeText}
               />
          </View>
     );
}
const styles = {
     inputStyle: {
          color: '#000',
          paddingRight: 5,
          paddingLeft: 5,
          fontSize: 18,
          lineHeight: 23,
          flex: 2
     },
     labelStyle: {
          fontSize: 18,
          paddingLeft: 20,
          flex: 1,
     },
     containerStyle:{
          height: 40,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center'
     },
}
 export { Input };
