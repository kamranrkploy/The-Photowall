import React from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';
import './style/style.css';
import {HashRouter} from 'react-router-dom';

//whenever the instance of main class is called its constructor will automatically be called

ReactDom.render(<HashRouter><Main/></HashRouter> , document.getElementById('root'));
