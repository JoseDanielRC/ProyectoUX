import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import fire from './Fire';
class App extends Component {

    constructor() {
        super();
        this.state = ({
            username: null,
        });
        this.authListener = this.authListener.bind(this);
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((username) => {
            if (username) {
                this.setState({ username });
                // localStorage.setItem('user',user.uid);
            } else {
                this.setState({ username: null });
                // localStorage.removeItem('user');
            }
        })
    }

    render() {
        return (
            <div>{this.state.username ? (<Home />) : (<Login />)}</div>
        );
    }
}

export default App;
