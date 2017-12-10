import React from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import Cart, { runCart } from './Cart';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(runCart)

render(
  <Provider store={store}>
    <Cart />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
