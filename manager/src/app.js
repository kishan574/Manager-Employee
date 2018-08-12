import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Header from './components/common';
import Router from './Router';

class App extends Component {

componentWillMount() {
  const config = {
    apiKey: "AIzaSyCfCUZES0TR5R_owTYxPVriC_mL138Ttds",
    authDomain: "manager-d8177.firebaseapp.com",
    databaseURL: "https://manager-d8177.firebaseio.com",
    projectId: "manager-d8177",
    storageBucket: "",
    messagingSenderId: "217532854734"
  };

  firebase.initializeApp(config);
}

render(){
  const store = createStore(reducers , {}, applyMiddleware(ReduxThunk));
  return(
    <Provider store={store}>
      <Router />
    </Provider>
  );
 }
}


export default App;
