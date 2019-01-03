import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AFrame from './components/A-Frame'

class App extends Component {
    render() {
        return ( 
            <div className = "App">
                <Header></Header>
                <AFrame></AFrame>
            </div>
        );
    }
}

export default App;