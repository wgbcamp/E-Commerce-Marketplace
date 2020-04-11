import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function TextFieldSizes() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h4>Post a new item for sale</h4>
        <TextField label="Item name" id="standard-size-normal"  />
        <TextField label="amount" id="standard-size-normal"  />
        <TextField label="category" id="standard-size-normal"  />
        <TextField label="condition" id="standard-size-normal"  />
        <TextField label="price (USD)" id="standard-size-normal"  />
        <TextField label="shipping cost" id="standard-size-normal"  />
        <TextField label="description" id="standard-size-normal"  />
        <TextField label="image" id="standard-size-normal"  />
      </div>
    </form>
  );
}