import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
 
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

    getCurrentDate() {
        var separator = '/'
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }
    getCurrentHour() {
        var separator = ':'
        let newDate = new Date()
        let hour = newDate.getHours();
        let min = newDate.getMinutes()  ;
        let seg = newDate.getSeconds();
        return  `${hour}:${min}:${seg}`
    }



    render() {
        const { classes } = this.props;
        let now = new Date();

        return (
            <div>

                <form className={classes.container} noValidate autoComplete="off">

                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Fecha (yyyy/mm/dd)"
                        defaultValue="2019/06/12"
                        value={this.getCurrentDate()}
                        className={classes.textField}
                        margin="normal"

                    />
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Hora (hh:mm)"
                        defaultValue="12:42"
                        value ={this.getCurrentHour()}
 
                        className={classes.textField}
                        margin="normal"

                    />

                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Total Anterior"
                        defaultValue="$926.71"
                        className={classes.textField}
                        margin="normal"

                    />
                    <TextField

                        id="standard-disabled"
                        label="Total Inicial"
                        defaultValue="$ 0.00"
                        className={classes.textField}
                        margin="normal"
                    />

                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Total Anterior"
                        defaultValue="$926.71"
                        className={classes.textField}
                        margin="normal"

                    />
                    <TextField

                        id="standard-disabled"
                        label="Total Inicial"
                        defaultValue="$ 0.00"
                        className={classes.textField}
                        margin="normal"
                    />



                    <TextField

                        id="standard-disabled"
                        label="Total Inicial"
                        defaultValue="$ 0.00"
                        className={classes.textField}
                        margin="normal"
                    />


                </form>
                <div className="col text-center">

                    <Button variant="contained" color="primary" value="data" className={classes.button}>
                        Enviar
                 </Button>

                </div>
            </div>

        );
    }
}


export default withStyles(styles)(Page);
