import React, { Component } from 'react';
import fire from './Fire';
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div class="d-flex justify-content-center align-items-center login-container">
                <form class="login-form text-center">
                    <h1 class="mb-5 font-weight-light text-uppercase">Ha iniciado sesion</h1>
                    <button type="submit" class="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase" onClick={this.logout} >Logout
                 </button>
                </form>
            </div>

        );

    }

}

export default Home;