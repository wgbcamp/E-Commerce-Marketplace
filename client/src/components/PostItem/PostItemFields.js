import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


    





const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    flexGrow: 1,
    textAlign: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  }
}));

export default function TextFieldSizes(props) {
  const classes = useStyles();
  
  const [name, setName] = useState('item name');
  const [quantity, setQuantity] = useState('item quantity');
  const [type, setType] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('item price');
  const [shippingCost, setShippingCost] = useState('item shipping cost');
  const [description, setDescription] = useState('item description');

  var postData = {
    name: name,
    quantity: quantity,
    type: type,
    condition: condition,
    price: price,
    shippingCost: shippingCost,
    description: description,
    image: props.imageName,
    itemSeller: props.itemSeller
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField label={name} id="standard-size-normal" onChange={e => setName(e.target.value)}  name="name" />
        </Grid>
        <Grid item xs={12}>
        <TextField label={quantity} id="standard-size-normal" name="PostItemQuantity" onChange={e => setQuantity(e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.formControl}>
        <InputLabel>item category</InputLabel>
        <Select
          value={type}
          onChange={e => setType(e.target.value)}>
          <MenuItem value={"Clothing"}>Clothing</MenuItem>
          <MenuItem value={"Sports"}>Sports</MenuItem>
          <MenuItem value={"Gardening"}>Gardening</MenuItem>
          <MenuItem value={"Electronics"}>Electronics</MenuItem>
          <MenuItem value={"Toys"}>Toys</MenuItem>
          <MenuItem value={"Books"}>Books</MenuItem>
          <MenuItem value={"Health & Wellness"}>Business</MenuItem>
          <MenuItem value={"Exercise"}>Exercise</MenuItem>
          <MenuItem value={"Music"}>Music</MenuItem>
          <MenuItem value={"Art"}>Art</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12}>
      <FormControl className={classes.formControl}>
        <InputLabel>item condition</InputLabel>
        <Select
          value={condition}
          onChange={e => setCondition(e.target.value)}
        >
          <MenuItem value={"New"}>New</MenuItem>
          <MenuItem value={"Refurbished"}>Refurbished</MenuItem>
          <MenuItem value={"Used"}>Used</MenuItem>
          <MenuItem value={"For parts only"}>For parts only</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12}>
        <TextField label={price} id="standard-size-normal"   name="PostItemPrice" onChange={e => setPrice(e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
        <TextField label={shippingCost} id="standard-size-normal" name="PostItemShippingCost" onChange={e => setShippingCost(e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
        <TextField label={description} id="standard-size-normal" name="PostItemDescription" onChange={e => setDescription(e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
        <input type="file" onChange={props.onFileChange} /> 
        </Grid>
        <Grid item xs={12}>
        <Button onClick={(event)=> props.postItem(postData)} variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
      {/* <h2>{props.imageName}</h2> */}
      
    </div>
  );
}