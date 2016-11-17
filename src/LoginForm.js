import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
     constructor(props) {
          super(props);
          this.state = {
               emailAdress: '',
               password: '',
               error: '',
               loading: false,
          };
          this.onButtonPress = this.onButtonPress.bind(this);
          this.renderButton = this.renderButton.bind(this);
          this.onLoginSuccess = this.onLoginSuccess.bind(this);
          this.onLoginFail = this.onLoginFail.bind(this);
     }
     onButtonPress(){
          const { emailAdress, password } = this.state;
          this.setState({
               error: '',
               loading: true
          });
          firebase.auth().signInWithEmailAndPassword(emailAdress, password)
          .then(this.onLoginSuccess)
          .catch(() => {
               firebase.auth().createUserWithEmailAndPassword(emailAdress, password)
               .then(this.onLoginSuccess)
               .catch(this.onLoginFail);
          });
     }

     onLoginFail(){
          this.setState({
               loading: false,
               error: 'Authentication Failed.'
          });
     }
     onLoginSuccess(){
          this.setState({
               emailAdress: '',
               password: '',
               loading: false,
               error: ''
          });
     }
     renderButton(){
          if(this.state.loading){
               return <Spinner size="small" />
          }
          return (
               <Button
                    onPressProp={this.onButtonPress}
               >
                    Login
               </Button>
          );
     }
     render(){
          const {errorTextStyle} = styles;
          return (
               <Card>
                    <CardSection>
                         <Input
                              labelTextProp="Email"
                              placeHolderProp="user@gmail.com"
                              value = {this.state.emailAdress}
                                             //argument text before =>
                              onChangeText = {emailAdress => this.setState({emailAdress})}
                         />
                    </CardSection>
                    <CardSection>
                         <Input
                              labelTextProp="Password"
                              placeHolderProp="password"
                              value = {this.state.password}
                              secureTextEntryProp = {true}
                                             //argument text before =>
                              onChangeText = {password => this.setState({password})}
                         />
                    </CardSection>
                    <Text style={errorTextStyle}>
                         {this.state.error}
                    </Text>
                    <CardSection>
                         {this.renderButton()}
                    </CardSection>
               </Card>
          );
     }
}
const styles = {
     errorTextStyle: {
          fontSize: 20,
          alignSelf: 'center',
          color: 'red',
     }
};
 export default LoginForm;
