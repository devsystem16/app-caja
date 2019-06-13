import React, { Component } from 'react';
import Header from './Components/Header'
import AperturaCaja from './Components/AperturaCaja'
import CierreCaja from './Components/CierreCaja'

import Api from './Services/api'



class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json_datosApertura: []
        }
    }
 

    componentDidMount() {
      
        const api = new Api()
        api.getApertura().then(response => {
            this.setState({ json_datosApertura: response.data.results })

        })


    }


    render() {
        return (
            <div className="container-fluid">
                <Header headerPrimary="Apertura De Caja" headerSecondary="Cierre De Caja" />

                <div className="row">
                    <div className="col">
                        <AperturaCaja json_datosApertura ={this.state.json_datosApertura} />
                    </div>

                    <div className="col">
                        <CierreCaja json_datosApertura={this.state.json_datosApertura} />
                    </div>

                </div>


            </div>

        );
    }
}

export default Router; 