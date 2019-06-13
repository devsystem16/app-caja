import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import iziToast from "izitoast";
import {
    CONVERSION_MONEDA
}
    from '../../Constantes'

const styles = theme => ({

    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,

    },

    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            block_text: false,

            date_open: "",
            hour_open: "",
            value_previous_close: "",
            value_open: "",
            observation: "",
            codigo_motorizado: ""

        };
    }

    enviarFormularioApertura = () => {


        var json = {
            "date_open": (this.state.date_open === "") ? this.props.json_datosApertura.date_open : this.state.date_open,
            "hour_open": (this.state.hour_open === "") ? this.props.json_datosApertura.hour_open : this.state.hour_open,
            "value_previous_close": (this.state.value_previous_close === "") ? this.props.json_datosApertura.value_previous_close : this.state.value_previous_close,
            "value_open": (this.state.value_open === "") ? this.props.json_datosApertura.value_open : this.state.value_open,
            "observation": (this.state.observation === "") ? this.props.json_datosApertura.observation : this.state.observation,
        }


        iziToast.success({
            title: "Éxito: ",
            message:  "Datos enviados con éxito.!!",
            timeout: 1000,
            resetOnHover: true,
            icon: "material-icons",
            transitionIn: "flipInX",
            transitionOut: "flipOutX",
            position: "topRight"
          });



        this.setState({
            block_text: true
        })
       
    }

    setField(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { date_open, hour_open, observation, value_open, value_previous_close } = this.props.json_datosApertura;


        var valorApertura = (value_open / CONVERSION_MONEDA === 0) ? "0.00" : value_open / CONVERSION_MONEDA
        var valorAnterior = (value_previous_close / CONVERSION_MONEDA === 0) ? "0.00" : value_previous_close / CONVERSION_MONEDA
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    disabled
                    name="date_open"
                    id="standard-disabled"
                    label="Fecha (yyyy/mm/dd)"
                    defaultValue="2019/06/12"
                    value={date_open}
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => this.setField(e)}
                />

                <TextField
                    name="hour_open"
                    disabled
                    id="standard-disabled"
                    label="Hora (hh:mm)"
                    defaultValue="12:42"
                    value={hour_open}
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => this.setField(e)}
                />

                <TextField
                    name="value_previous_close"
                    disabled={this.state.block_text}
                    id="standard-disabled"
                    label="Total Anterior"
                    defaultValue="$926.71"
                    value={(this.state.value_previous_close === "") ? valorAnterior : this.state.value_previous_close}
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => this.setField(e)}
                />

                <TextField
                    disabled={this.state.block_text}
                    name="value_open"
                    id="standard-disabled"
                    label="Total Inicial"
                    defaultValue="$ 0"
                    value={(this.state.value_open === "") ? valorApertura : this.state.value_open}
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => this.setField(e)}
                />


                <label>Observaciones</label>
                <textarea className="form-control rounded-0"
                    disabled={this.state.block_text}
                    id="exampleFormControlTextarea1"
                    name="observation"
                    value={(this.state.observation === "") ? observation : this.state.observation}
                    rows="2"
                    onChange={(e) => this.setField(e)}
                > </textarea>



                <div className="col text-center">

                    {this.state.block_text ?
                        null :
                        <Button onClick={this.enviarFormularioApertura} variant="contained" color="primary" value="data" className={classes.button}>
                            Enviar
                         </Button>
                    }

                </div>

            </form>
        );
    }
}


export default withStyles(styles)(Page);

