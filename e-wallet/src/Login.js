import React, { Component } from 'react';
import fire from './Fire';


class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            username: '',
            password: ''
        };
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

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div class="d-flex justify-content-center align-items-center login-container">
                <form class="login-form text-center">
                    <h1 class="mb-5 font-weight-light text-uppercase">Login</h1>
                    <div class="form-group">
                        <input type="text" id="user" class="form-control rounded-pill form-control-lg" placeholder="Username" onChange={this.handleUser.bind(this)} value={this.state.username}></input>
                    </div>
                    <div class="form-group">
                        <input type="password" id="password" class="form-control rounded-pill form-control-lg" placeholder="Password" onChange={this.handlePassword.bind(this)} value={this.state.password}></input>
                    </div>
                    <div class="forgot-link form-group d-flex justify-content-between align-items-center">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="remember"></input>
                            <label class="form-check-label" for="remember">Remember Password</label>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" class="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase" onClick={this.login} >Log in
    {/*onClick={() => { alert("Usuario: " + this.state.username + ", Password: " + this.state.password); }}*/}
                    </button>
                    <p class="mt-3 font-weight-normal">Don't have an account? <a href="#"><strong onClick={this.signup}>Register Now</strong></a></p>
                </form>
            </div>
        );
    }
}
export default Login;