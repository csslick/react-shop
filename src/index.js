import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

let initState = [
  {
    id: 0,
    title: "헤드폰1",
    quan: 2
  },
  {
    id: 1,
    title: "헤드폰2",
    quan: 3
  },
]

// redux store 수정 함수
function reducer(state = initState, action) {
  if(action.type === 'addItem'){
    let newState = [...state];
    newState.push(action._data);
    console.log(action._data)
    return newState;
  } else if(action.type === 'ADD') {
    let newState = [...initState];
    newState[action.id].quan += 1;
    return newState;
  } else if (action.type === 'DEC') {
    let newState = [...initState];
    newState[action.id].quan <= 0 ? 
      newState[action.id].quan = 0 : newState[action.id].quan -= 1;
    return newState;
  } else {
    return state;
  }
}

let initAlert = true;
function reducer2(state = initAlert, action) {
  if(action.type == 'CLOSE') {
    state = false;
    return state;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({
  reducer,
  reducer2
}));

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
