import React , {Component} from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';
import './style/style.css';

//whenever the instance of main class is called its constructor will automatically be called
ReactDom.render(<Main/> , document.getElementById('root'));
