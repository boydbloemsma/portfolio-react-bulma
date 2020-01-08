import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './includes/Navbar';
import Contact from './includes/Contact';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Contact />, document.getElementById('contact'));