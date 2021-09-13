import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let initState = [
  {
    id: 0,
    name: "헤드폰1",
    quan: 2
  },
  {
    id: 1,
    name: "헤드폰2",
    quan: 3
  },
]

// redux store 수정 함수
function reducer(state = initState, action) {
  if(action.type === 'ADD') {
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

let store = createStore(reducer);

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
