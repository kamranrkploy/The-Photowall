import React from 'react';
import ReactDom from 'react-dom';
import './style/style.css';
import {HashRouter} from 'react-router-dom';
import {createStore ,applyMiddleware} from 'redux';
import rootReducer from './Redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import {database} from './database/config'

const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))


//whenever the instance of main class is called its constructor will automatically be called

ReactDom.render(<Provider store={store}><HashRouter><App/></HashRouter></Provider> , document.getElementById('root'));
