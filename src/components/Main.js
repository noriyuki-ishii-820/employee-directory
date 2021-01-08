import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Main.css"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Main() {
    const classes = useStyles();
    

    return (
        <div>
            <div className="search">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField className="textfield" id="outlined-basic" label="Search!" variant="outlined" />
                </form>
            </div>
        </div>
    )
}

export default Main
