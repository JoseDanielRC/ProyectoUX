import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';
class App extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUser(event) {
        this.setState({
            username: event.target.value
        })
    }
    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    togglePopup() {
        this.setState({
            username: !this.state.username
        });
      }
    render() {
        return (
            <div class="d-flex justify-content-center align-items-center login-container">
                <form class="login-form text-center">
                    <h1 class="mb-5 font-weight-light text-uppercase">Login</h1>
                    <div class="form-group">
                        <input type="text" id="user" class="form-control rounded-pill form-control-lg" placeholder="Username" onChange={this.handleUser.bind(this)}></input>
                    </div>
                    <div class="form-group">
                        <input type="password" id="password" class="form-control rounded-pill form-control-lg" placeholder="Password" onChange={this.handlePassword.bind(this)}></input>
                    </div>
                    <div class="forgot-link form-group d-flex justify-content-between align-items-center">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="remember"></input>
                            <label class="form-check-label" for="remember">Remember Password</label>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="button" class="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase" onClick={() => {alert("Usuario: " + this.state.username+ ", Password: " + this.state.password);}} >Log in
                    </button>
                    <p class="mt-3 font-weight-normal">Don't have an account? <a href="#"><strong>Register Now</strong></a></p>
                </form>
            </div>

        );
    }
}

export default App;
