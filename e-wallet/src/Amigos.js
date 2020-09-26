import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
//add friend
// transfer
//lista de 
/*function VentanaAgregar() {
    return (
        <Modal isOpen={modal}>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Do Something</Button>{' '}
                <Button color="secondary">Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
*/
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
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" style={{ "max-width":"200px"," min-height": "400px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png" alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }

}
export default Amigos;