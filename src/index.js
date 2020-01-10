import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import Navbar from './includes/Navbar';
import About from './includes/About';
import Contact from './includes/Contact';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Contact />, document.getElementById('contact'));