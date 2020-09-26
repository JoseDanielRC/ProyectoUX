import React, { Component } from 'react';
import fire from './Fire';
import Register from './Register';
import Login from './Login';
function SubmissionBanner(props) {
    if (!props.submit) {
        return null;
    }

    return (
        <div >
            <Register />
        </div>
    );
}
class IniciarS extends Component {

    constructor(props) {
        super(props);
        this._onButtonClick = this._onButtonClick.bind(this);
        this.LoginClick = this.LoginClick.bind(this);
        this.login = this.login.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.state = {
            showComponent: false,
            shouldShowButton: false,
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
    LoginClick() {
        this.setState(({
            showComponent: false,
            shouldShowButton: false,
            username: '',
            password: ''
        }));

    }
    _onButtonClick() {
        this.setState(prevState => ({
            showComponent: true,
            shouldShowButton: !prevState.shouldShowButton,
            username: '',
            password: ''
        }));
    }
    changeState() {
        //ES6 Object Destructuring
        console.log(document.getElementById("reg"));
        if (this.state.showComponent) {
            return <Register />
        } else {
            return false;
        }
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
                    <SubmissionBanner submit={this.state.shouldShowButton} />
                    <p id="reg" class="mt-3 font-weight-normal">{this.state.shouldShowButton ? "" : 'No tiene Cuenta?'} </p><a type="submit" className="vol" href="#"><strong onClick={() => {
                        this._onButtonClick();
                    }}>
                        {this.state.shouldShowButton ? "Volver" : "Register Now"}</strong></a>
                </form>
            </div>
        );
    }
}
export default IniciarS;