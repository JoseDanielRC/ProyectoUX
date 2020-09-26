import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
//add friend
// transfer
//lista de 
class Amigos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            shouldShowButton: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }
    _onButtonClick() {
        this.setState(prevState => ({
            showComponent: true,
            shouldShowButton: !prevState.shouldShowButton
        }));
    }
    static get DIV_STYLE() {
        return {
            display: 'flex',
            'flex-wrap': 'wrap',
            'margin': 0
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
            <div class="col-md-12 text-center">
                <h1>
                    estoy en amigos
                </h1>
            </div>
        );

    }

}
export default Amigos;