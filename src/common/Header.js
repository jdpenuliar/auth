// import libraries for making a componenet

// make a component

// make the compoenent available to other parts of the App
// because we dont want to display the component right away

///////////////////////////////////////////////
// import a library to help create Component //
///////////////////////////////////////////////

import React from 'react';
// import ReactNative from 'react-native';
import { Text, View } from 'react-native';

///////////////////////////////////////////////
//             Create a compoenent           //
///////////////////////////////////////////////

// rule of thumb making a component, it should be the same
// as the file name. And Capital on the first letter

// only the root compoenent uses AppRegistry
// for child components its just exports es6 method
// const { textStyle } = styles;
// const Header = () => (
//
//      <Text style={textStyle}>
//           Albums!
//      </Text>
// );

const Header = (props) => {
     const { textStyle, viewStyle } = styles;
     return (
          // view tag is used to position tags
          // flexbox is how to position elements. System of positioning
          // elements of the container. in this case the view tag then tells
          //how to position the text tag.

          //to center, alignItems and justifyContent
          // justifyContent used to position vertical
          // alignItems used to position horizontal
          <View style={viewStyle}>
               <Text style={textStyle}>
                    {props.headerText}
               </Text>
          </View>

     );
};

//styling is always inside each compoenent
// no default styling or packaged styling like bootstrap
// all camel case
const styles = {
     // view tag is used to position tags or its kinda like a div
     // flexbox is how to position elements
     //to center, alignItems and justifyContent

     // flexbox is how to position elements. System of positioning
     // elements of the container. in this case the view tag then tells
     //how to position the text tag.

     // justifyContent used to position vertical
     // alignItems used to position horizontal
     viewStyle: {
          backgroundColor: '#F8F8F8',
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
          paddingTop: 15,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          elevation: 2,
          position: 'relative'
     },
     textStyle: {
          fontSize: 20
     }
};

///////////////////////////////////////////////
//       make the compoenent available       //
//        to other parts of the App          //
///////////////////////////////////////////////

// export default Header;
export { Header };
