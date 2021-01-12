import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import "./Navbar.css"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    buttons: {
       marginLeft:"auto"
    }
  }));

function Navbar() {
    const classes = useStyles();
       
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            Employee Directory
          </IconButton>
          <div className={classes.buttons}>
            <a href="https://github.com/noriyuki-ishii-820/employee-directory"><GitHubIcon className="sns-icon"/></a>
            <a href="https://twitter.com/nishiiSydDev"><TwitterIcon className="sns-icon"/></a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar
