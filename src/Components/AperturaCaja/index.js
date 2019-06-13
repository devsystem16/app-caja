import React, { Component } from 'react';
import Page from './Page'





class AperturaCaja extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
 
    render() {
        return (<Page json_datosApertura={this.props.json_datosApertura} />    );
    }
}

export default AperturaCaja;