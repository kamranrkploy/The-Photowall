import React from 'react';
import ReactDom from 'react-dom';
import './style/style.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './Redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App';

const store = createStore(rootReducer)


//whenever the instance of main class is called its constructor will automatically be called

ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider> , document.getElementById('root'));
