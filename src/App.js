import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, CardSection, Spinner } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm';
class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               loggedIn: null,
          };
          this.renderContent = this.renderContent.bind(this)
     }
     renderContent(){
          switch(this.state.loggedIn){
               case true:
                    return (
                         <CardSection>
                              <Button
                                   onPressProp={() => firebase.auth().signOut()}
                              >
                                   Logout
                              </Button>
                         </CardSection>
                    );
               case false:
                    return <LoginForm />
               default:
                    return (
                         <CardSection>
                              <Spinner size="large" />
                         </CardSection>
                    );
          }
     }
     componentWillMount(){
          var config = {
               apiKey: "AIzaSyBeJly86bmQyN9zE9Mu_33PBZeUtFWO28I",
               authDomain: "auth-7db83.firebaseapp.com",
               databaseURL: "https://auth-7db83.firebaseio.com",
               storageBucket: "auth-7db83.appspot.com",
               messagingSenderId: "501072158245"
          };
          firebase.initializeApp(config);

          firebase.auth().onAuthStateChanged((user) => {
               if(user){
                    this.setState({loggedIn: true});
               }else{
                    this.setState({loggedIn: false});
               }
          });
     }
     render(){
          return(
               <View>
                    <Header headerText="Auth haha" />
                    {this.renderContent()}
               </View>
          );
     }
}
export default App;
