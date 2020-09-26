import React, { Component } from 'react';
import fire from './Fire';
import Tarjeta from './Tarjeta';
import CardSwiper from './CardSwiper.js';
import Card from './Card'
import { Form, Field } from 'react-final-form'
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
/*
                            <div style={{ 'padding-top': '30px' }}>
                                {this.state.shouldShowButton ? <SubmissionBanner /> : < Tarjetas />}
                            </div>
                            <SubmissionBanner submit={this.state.shouldShowButton} /> */
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            shouldShowButton: false
        };
        this.logout = this.logout.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
        this.HomeClick = this.HomeClick.bind(this);
    }
    _onButtonClick() {
        this.setState(prevState => ({
            showComponent: true,
            shouldShowButton: !prevState.shouldShowButton
        }));
    }
    HomeClick() {
        this.setState(({
            showComponent: false,
            shouldShowButton: false
        }));

    }
    logout() {
        fire.auth().signOut();
    }
    static get DIV_STYLE() {
        return {
            display: 'flex',
            'flex-wrap': 'wrap',
            'margin': 0
        };
    }
    static get NAV_STYLE() {
        return {

            background: 'linear-gradient(#8259cb 0%, #3a2b58 100%)'
        };
    }
    static get BACK_STYLE() {
        return {
            background: 'white',
            margin: 0,
            height: '100%'
        };
    }
    render() {

        return (

            <div >
                <body class={Home.BACK_STYLE}>
                    <div >
                        <form >
                            <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-light" style={Home.NAV_STYLE}>
                                <a class="navbar-brand" href="#">E-Wallet</a>
                                <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#" onClick={this.HomeClick}>Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#" onClick={this._onButtonClick}>Agregar Tarjeta</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Amigos</a>
                                        </li>
                                    </ul>
                                    <ul class="navbar-nav">
                                        <li class="nav-item pull-right">
                                            <a href="#" class="nav-link pull-right" style={{ 'color': 'white' }} onClick={this.logout}><strong>Logout</strong></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="container-fluid d-flex justify-content-center">
                                <div className="row " style={{ 'padding-top': '30px' }}>
                                    <div className="col-md-6">
                                        <Card
                                            number={"3786486895872356"}
                                            name={"Jasser Ramos"}
                                            expiry={"02/23"}
                                            cvc={"333"}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Card
                                            number={"4286486895872356"}
                                            name={"Jasser Ramos"}
                                            expiry={"02/23"}
                                            cvc={"333"}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Card
                                            number={"4286486895872356"}
                                            name={"Jasser Ramos"}
                                            expiry={"02/23"}
                                            cvc={"333"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ 'padding-top': '30px' }}>
                                {this.state.shouldShowButton ? <SubmissionBanner /> : <Tarjetas />}
                            </div>
                            <SubmissionBanner submit={this.state.shouldShowButton} />
                            <div class="col-md-12 text-center">
                                <button type="button" class="btn mt-5 rounded-pill btn-lg btn-custom text-uppercase" onClick={this._onButtonClick} >
                                    {this.state.shouldShowButton ? "Volver" : "Agregar Tarjeta"}
                                </button>
                                <div></div>
                                <button type="submit" class="btn mt-5 rounded-pill btn-lg btn-custom text-uppercase" onClick={this.logout} >
                                    Logout
                            </button>
                            </div>
                        </form>
                    </div>
                </body>
            </div >
        );


    }

}

export default Home;