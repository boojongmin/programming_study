/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxbkisnMO2N5NifrddaQ4Vl3aZY9IoUHk",
  authDomain: "drinkchecker.firebaseapp.com",
  databaseURL: "https://drinkchecker.firebaseio.com",
  storageBucket: "drinkchecker.appspot.com",
  messagingSenderId: "896413586697"
};
firebase.initializeApp(config);

console.log(firebase);

async function signup(email, pass) {

    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);

        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.log(error.toString())
    }

}

signup('boojongmin@gmail.com', '1234');



// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <View>
        <Text>{value}</Text>
        <Button title="btn" onPress={onIncreaseClick} />
      </View>
    )
  }
}
//
// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default class DrinkChecker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <App />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DrinkChecker', () => DrinkChecker);
