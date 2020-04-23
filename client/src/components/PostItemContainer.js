import React, { Component } from "react";
import api from "../utils/api";
import PostItemFields from "./PostItemFields";
class PostItem3 extends Component {


    postItem = (postData) =>{
        console.log(postData)
    
        api.postItem(postData)
           
    
    };







    render(){
        return (
            
            <div>
                <PostItemFields
                postItem={this.postItem}

                />
            </div>
            )
    }
}


export default PostItem3;