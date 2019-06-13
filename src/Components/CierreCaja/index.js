import React, { Component } from 'react';
import Page from './Page'
import Default from './Default'
class CierreCaja extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const { value_open } = this.props.json_datosApertura;

        console.log(value_open)

        if (value_open !== null) {
            return (<Page />);
        } else {
            return (<Default />);
        }

    }
}

export default CierreCaja;

 