import React from 'react'
import ReactDOM from 'react-dom/client';
import './Index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

interface IAction {
  type: string
  payload: number
}

interface IState {
  cash: number
}

const defaultState = {
  cash: 0
}

const reducer = (state: IState, action: IAction) => {
  switch(action.type) {
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}
    default:
      return state
  }
}



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
