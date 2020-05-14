import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
      flexGrow: 1,
      textAlign: 'center'
    },
  }));

  export default function TextFieldSizes(props) {
    const classes = useStyles();
  
    
    return (
      <div className={classes.root}>
          <br></br>
        <Grid container spacing={3}>
          <Grid item xs={12}>

          <br></br>
          <h4>Log out of your account</h4>
          <br></br>
          <br></br>
          <Link to="/">
          <Button onClick={props.logOut} variant="contained" color="primary">Click here to log out</Button>
          </Link>
          </Grid>
        </Grid>
        <h2>{props.imageName}</h2>
      </div>
    );
  }