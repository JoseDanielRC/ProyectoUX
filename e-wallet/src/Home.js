import React, { Component } from 'react';
import fire from './Fire';
import Tarjeta from './Tarjeta';
import Card from './Card';
import "./Box.css";
import Amigos from './Amigos';
const cardInfo = [
    {
        number: "3786486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    },
    {
        number: "4286486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    },
    {
        number: "5586486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    }, {
        number: "3786486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    },
    {
        number: "4286486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    },
    {
        number: "5586486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    }, {
        number: "3786486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    },
    {
        number: "4286486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    },
    {
        number: "5586486895872356",
        name: "Jasser Ramos",
        expiry: "02/23",
        cvc: "333"
    }];
const renderCard = (card, index) => {
    return (
        <Card
            style={{ width: "1rem" }}
            key={index}
            className="box"
            number={card.number}
            name={card.name}
            expiry={card.expiry}
            cvc={card.cvc}
        />
    );
};

class Home extends Component {

    constructor() {
        super();
        this.state = {
            showComponent: false,
            shouldShowButton: false,
            showAmigos: false,
            regresasHome: true,
            tarjetas: null
        };
        this.logout = this.logout.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
        this.HomeClick = this.HomeClick.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
    }

    _onButtonClick() {
        this.setState(prevState => ({
            showComponent: true,
            shouldShowButton: !prevState.shouldShowButton,
            showAmigos: false,
        }));
    }

    _onButtonClick2() {
        this.setState(prevState => ({
            showComponent: true,
            shouldShowButton: false,
            showAmigos: true,
            regresasHome: false
        }));
    }
    HomeClick() {

        this.setState(({
            showComponent: false,
            shouldShowButton: false,
            showAmigos: false,
            regresasHome: true
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
                                            <a class="nav-link" href="#" onClick={this._onButtonClick2}>Amigos</a>
                                        </li>
                                    </ul>
                                    <ul class="navbar-nav">
                                        <li class="nav-item pull-right">
                                            <a href="#" class="nav-link pull-right" style={{ 'color': 'white' }} onClick={this.logout}><strong>{this.props.email}   Logout</strong></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div style={{ 'padding-top': '30px' }}>
                                {this.state.shouldShowButton ? (

                                    <Tarjeta />
                                ) : (
                                        null
                                    )}
                            </div>
                            <div style={{ 'padding-top': '30px' }}>
                                {this.state.showAmigos ? (

                                    <Amigos />
                                ) : null}
                            </div>
                            {this.state.regresasHome && (!this.state.shouldShowButton && !this.state.showAmigos) ? <div className="grid">{cardInfo.map(renderCard)}</div> : null}
                        </form>
                    </div>
                </body>
            </div >
        );


    }

}

export default Home;