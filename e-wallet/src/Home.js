import React, { Component } from 'react';
import fire from './Fire';
import Tarjeta from './Tarjeta';
import App from './App.js';
import Card from './Card';
import "./Box.css";
import Amigos from './Amigos';
import { browserHistory } from 'react-router';
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
const tarjetasdb = [];
const cargarTarjetas = (email) => {
    let x = 1;
    fire.firestore().collection('users').where("email", "==", email).get().then(DocumentSnapshot => {
        DocumentSnapshot.docs.forEach(doc => {
            if (doc.exists) {
                doc.data().tarjetas.forEach(tar => {
                    if (tar != null) {
                        const name = tar.name;
                        const number = tar.number;
                        const expiry = tar.expiry;
                        const cvc = tar.cvc;
                        const obj = {
                            'name': name,
                            'expiry': expiry,
                            'number': number,
                            'cvc': cvc
                        }
                        tarjetasdb.push(obj);
                    }
                });
            } else {
                alert('no existeeee');
            }
        })
    });
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            shouldShowButton: false,
            showAmigos: false,
            regresasHome: true
        };
        this.logout = this.logout.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
        this.HomeClick = this.HomeClick.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
        this.onUnload = this.onUnload.bind(this);
    }
    componentDidMount() {
        window.addEventListener('onbeforeunload', this.onUnload);
    }

    componentWillUnmount() {
        window.removeEventListener('onbeforeunload', this.onUnload);
    }

    onUnload() {
        browserHistory.push('/');
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
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Home</a></li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
        <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Page 1-1</a></li>
                                    <li><a href="#">Page 1-2</a></li>
                                    <li><a href="#">Page 1-3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>
                {console.log("EN HOME: " + this.props.tarjetas)}
                <body >
                    <div >
                        <form >

                            {/*<nav class="navbar navbar-inverse" style={Home.NAV_STYLE}>
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
                            </nav>*/}
                            <div style={{ 'padding-top': '30px' }}>
                                {this.state.shouldShowButton ? (
                                    <>
                                        {alert("DOCID EN HOME:" + this.props.docid)}
                                        <Tarjeta email={this.props.email} id={this.props.uid} docid={this.props.docid} />
                                    </>
                                ) : (
                                        null
                                    )}
                            </div>
                            <div style={{ 'padding-top': '30px' }}>
                                {this.state.showAmigos ? (

                                    <Amigos />
                                ) : null}
                            </div>
                            {this.state.regresasHome && (!this.state.shouldShowButton && !this.state.showAmigos) ? <div className="grid">{this.props.tarjetas.map(renderCard)}</div> : null}
                        </form>
                    </div>
                </body>
            </div >
        );


    }

}

export default Home;