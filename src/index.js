import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux'
import reducer from './reducers/counter'

import {increment,decrement} from './actions';

import { Provider } from 'react-redux'

const store = createStore(reducer)

// store.subscribe(()=> console.log("state updated!",store.getState()));

// store.dispatch({
//     type:"INCREMENT"
// })
//
// store.dispatch({ type:"INCREMENT" })


ReactDOM.render(
    <Provider store ={ store }>
      <App/>
    </Provider>,
     document.getElementById('root'));

// store.subscribe(render);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
