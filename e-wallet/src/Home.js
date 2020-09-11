import React, { Component } from 'react';
import fire from './Fire';
import Tarjeta from './Tarjeta';
import CardSwiper from './CardSwiper.js';
function SubmissionBanner(props) {
    if (!props.submit) {
        return null;
    }

    return (
        <div >
            <Tarjeta />
        </div>
    );
}
function Tarjetas(props) {
    return (
        <div >
            <CardSwiper />
        </div>
    );
}
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            shouldShowButton: false
        };
        this.logout = this.logout.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
    }
    _onButtonClick() {
        this.setState(prevState => ({
            showComponent: true,
            shouldShowButton: !prevState.shouldShowButton
        }));
    }
    logout() {
        fire.auth().signOut();
    }

    render() {

        return (

            <div >
                <div>
                    <Tarjetas />
                </div>
                <div style={{ 'padding-top':'30px' }}>
                    <form >
                        <h1 class="mb-5 font-weight-light text-uppercase text-center">Ha iniciado sesion</h1>
                        <SubmissionBanner submit={this.state.shouldShowButton} />
                        <button type="button" class="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase" onClick={this._onButtonClick} >
                            {this.state.shouldShowButton ? "Volver" : "Agregar Tarjeta"}
                        </button>
                        <button type="submit" class="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase" onClick={this.logout} >
                            Logout
                            </button>
                    </form>
                </div>
            </div >
        );


    }

}

export default Home;