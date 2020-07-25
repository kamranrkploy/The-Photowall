import React from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';
import './style/style.css';
import {BrowserRouter} from 'react-router-dom';

//whenever the instance of main class is called its constructor will automatically be called

ReactDom.render(<BrowserRouter><Main/></BrowserRouter> , document.getElementById('root'));
