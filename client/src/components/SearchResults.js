import React, { Component } from "react";
import HeaderBar from "./HeaderBar";
import api from "../utils/api";
import Grid from '@material-ui/core/Grid';
import ItemCard from "./ItemCard";




class SearchResults extends Component {
    

    state = {
        search: "",
        itemData: []
    };

    componentDidMount(){
        console.log(localStorage.getItem("search"));
        var x = {
            search: localStorage.getItem("search")
        };

        api.searchPosts(x)
            .then((res) => {
                this.setState({ itemData: res.data });
            });
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
        window.location.reload();    
    }


    render(){
        return (
            <div>
                
                    <HeaderBar
                        handleInputChange={this.handleInputChange}
                        saveCookie={this.saveCookie}
                    />
                    <Grid container spacing={3}>
            <Grid item xs={12}>
            <Grid container spacing={3}>
            {[...this.state.itemData].map((e, index)=>
            <Grid item xs={4}>
            <ItemCard
                key={e._id}
                image={"." + e.image}
                title={e.name}
                description={e.description}
                price={"$" + e.price}
                shipping={e.shippingCost}
                id={e._id} 
                
            />

            </Grid>
            )}
            </Grid>
            </Grid>
            </Grid>
            </div>
        )
    }
}

export default SearchResults;