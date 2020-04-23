import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FileUpload from './FileUpload';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function TextFieldSizes(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h4>Post a new item for sale</h4>
        
        <TextField label="Item name" id="standard-size-normal" value={props.postItemName} name="PostItemName" onChange={props.handleInputChange}/>

        <TextField label="amount" id="standard-size-normal"  value={props.postItemAmount} name="PostItemAmount" onChange={props.handleInputChange}/>

        <TextField label="category" id="standard-size-normal"  value={props.postItemCategory} name="PostItemCategory" onChange={props.handleInputChange}/>

        <TextField label="condition" id="standard-size-normal"  value={props.postItemCondition} name="PostItemCondition" onChange={props.handleInputChange}/>

        <TextField label="price (USD)" id="standard-size-normal"  value={props.postItemPrice} name="PostItemPrice" onChange={props.handleInputChange}/>

        <TextField label="shipping cost" id="standard-size-normal"  value={props.postItemShippingCost} name="PostItemShippingCost" onChange={props.handleInputChange}/>

        <TextField label="description" id="standard-size-normal"  value={props.postItemDescription} name="PostItemDescription" onChange={props.handleInputChange}/>

        <TextField label="image" id="standard-size-normal"  value={props.postItemImage} name="PostItemImage" onChange={props.handleInputChange}/>

        <Button variant="contained" component="label" value={props.postItemImage} onChange={props.handleInputChange}>
  Upload File
  <input
    type="file"
    style={{ display: "none" }}
  />
</Button>

  <FileUpload/>

        <Button onClick={(event)=> props.postItem(props, event)} variant="contained" color="primary">Submit</Button>


        <br></br>
      </div>
    </form>
  );
}