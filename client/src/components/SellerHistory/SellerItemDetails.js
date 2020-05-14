import React, { Component } from "react";
import HeaderBar from '../HeaderBar/HeaderBar';
import SellerItemDetailsCard from './SellerItemDetailsCard';
import api from "../../utils/api";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class SellerItemDetails extends Component {

    state = {
        search: "",
        itemData: [{
            _id: "",
            name: "",
            quantity: "",
            type: "",
            condition: "",
            price: "",
            shippingCost: "",
            description: "",
            image: "",
            itemSeller: "",
            type: ""
        }],
        updateName: "",
        updateQuantity: "",
        updateType: "",
        updateCondition: "",
        updatePrice: "",
        updateShippingCost: "",
        updateDescription: ""
    };

    componentDidMount(){
        var data = {
            search: localStorage.getItem("itemID")
        };

        api.readItemByID(data)
        .then((res) =>{
            this.setState({ itemData: res.data })
        })
        .catch((err) => console.log(err));

        
    }

    handleInputChange = event=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
  
    saveCookie = () =>{
      localStorage.setItem("search", this.state.search);
    }

    purchaseItem = () =>{
        var data = {
        name : this.state.itemData[0].name,
        quantity: this.state.itemData[0].quantity,
        type: this.state.itemData[0].type,
        condition: this.state.itemData[0].condition,
        price: this.state.itemData[0].price,
        shippingCost: this.state.itemData[0].shippingCost,
        description: this.state.itemData[0].description,
        image: this.state.itemData[0].image
        };
        console.log(data);
    
        api.purchaseItem(data)
            .then((res) =>{
                console.log(res)
            });
            
    }
 
    deleteItem = (id, event) =>{
      event.preventDefault();
  
  console.log("This is the ID to Delete");
  console.log(id);
  var thingToDelete = {
      thingID: id
  }
  
      api.deleteItem(thingToDelete)
  };

    updateItem = () =>{
        var updateData ={
            _id: this.state.itemData[0]._id,
            name: this.state.updateName,
            quantity: this.state.updateQuantity,
            type: this.state.updateType,
            condition: this.state.updateCondition,
            price: this.state.updatePrice,
            shippingCost: this.state.updateShippingCost,
            description: this.state.updateDescription
        }
        api.updateItem(updateData);
        window.location.reload(true);
    }

    render(){
        return (
            <div>
            <HeaderBar
                handleInputChange={this.handleInputChange}
                saveCookie={this.saveCookie}
                />

            <SellerItemDetailsCard
            key={this.state.itemData[0]._id}
            image={"." + this.state.itemData[0].image}
            title={this.state.itemData[0].name}
            description={this.state.itemData[0].description}
            price={"$" + this.state.itemData[0].price}
            shipping={"Shipping: " + this.state.itemData[0].shippingCost}
            id={this.state.itemData[0]._id}
            image={this.state.itemData[0].image}
            itemSeller={"Seller: " + this.state.itemData[0].itemSeller}
            type={"Category: " + this.state.itemData[0].type}
            purchaseItem={this.purchaseItem}
            updateItem={this.updateItem}
            deleteItem={this.deleteItem}

            />

<br></br>
<br></br>
<h2>Update your item:</h2>
<br></br>
<br></br>
<Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField label={"Name: " + this.state.itemData[0].name} id="standard-size-normal" onChange={this.handleInputChange}  name="updateName" />
        </Grid>
        <Grid item xs={12}>
        <TextField label={"Quantity: " + this.state.itemData[0].quantity} id="standard-size-normal" onChange={this.handleInputChange}  name="updateQuantity" />
        </Grid>
        <Grid item xs={12}>
        <TextField label={"Category: " + this.state.itemData[0].type} id="standard-size-normal" onChange={this.handleInputChange}  name="updateType" />
        </Grid>
        <Grid item xs={12}>
        <TextField label={"Condition:" + this.state.itemData[0].condition} id="standard-size-normal" onChange={this.handleInputChange}  name="updateCondition" />
        </Grid>
        <Grid item xs={12}>
        <TextField label={"Price: $" + this.state.itemData[0].price} id="standard-size-normal" onChange={this.handleInputChange}  name="updatePrice" />
        </Grid>
        <Grid item xs={12}>
        <TextField label={"Shipping cost: $" + this.state.itemData[0].shippingCost} id="standard-size-normal" onChange={this.handleInputChange}  name="updateShippingCost" />
        </Grid>
        <Grid item xs={12}>
        <TextField label={"Description: ..."} id="standard-size-normal" onChange={this.handleInputChange}  name="updateDescription" />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={this.updateItem}>Update</Button>
        </Grid>
      </Grid>


            </div>
        )
    }
}

export default SellerItemDetails;