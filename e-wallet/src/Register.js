import React, { Component } from 'react';
import fire from './Fire';
import './Register.css';
import { Modal } from "react-responsive-modal";
export default class Register extends Component {
    constructor(props) {
        super(props);
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
            <>
                <Modal open={true} >
                        <form action="/examples/actions/confirmation.php" method="post">
                            <h2>Create an Account</h2>
                            <p class="hint-text">Sign up with your social media account or email address</p>
                            <div class="social-btn text-center">
                                <a href="#" class="btn btn-primary btn-lg"><i class="fa fa-facebook"></i> Facebook</a>
                                <a href="#" class="btn btn-info btn-lg"><i class="fa fa-twitter"></i> Twitter</a>
                                <a href="#" class="btn btn-danger btn-lg"><i class="fa fa-google"></i> Google</a>
                            </div>
                            <div class="or-seperator"><b>or</b></div>
                            <div class="form-group">
                                <input type="text" id="user" class="form-control input-lg" name="username" placeholder="Username" required="required" onChange={this.handleUser.bind(this)} value={this.state.username}></input >
                            </div>
                            <div class="form-group">
                                <input type="password" id="password" class="form-control input-lg" name="password" placeholder="Password" required="required" onChange={this.handlePassword.bind(this)} value={this.state.password}></input >
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-success btn-lg btn-block signup-btn" onClick={this.signup}>Sign Up</button>
                            </div>
                        </form>
                </Modal>
            </>);


    }

}