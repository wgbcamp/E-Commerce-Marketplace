import React, { Component } from "react";
import api from "../../utils/api";
import PostItemFields from "./PostItemFields";
import HeaderBar from '../HeaderBar/HeaderBar';


class PostItem3 extends Component {

    state = {
        selectedFile: null,
        selectedFileName: "",
        submissionTime: "",
        search: "",
        itemSeller: ""
    };


    componentDidMount(){
        this.setState({ submissionTime: Date.now() })


        var x = {
          account: localStorage.getItem("account")
        }

        api.itemSeller(x)
          .then((res)=>{
            console.log(res);
            this.setState({ itemSeller: res.data[0].uniqueID });
          })
    
      
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
    localStorage.setItem("searchTag", "");
}

SaveCookieTag = e =>{
  localStorage.setItem("searchTag", e);
  localStorage.setItem("search", "");
}

    onFileChange = event => {
        var test = event.target.value.replace(/^.*[\\\/]/, '');
        var frontOfString = './images/' + this.state.submissionTime;
        var finalString = frontOfString.concat(test);
        console.log(finalString);

        this.setState({ selectedFileName: finalString })
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {

        
        const formData = new FormData();
        


        formData.append(
            "avatar",
            this.state.selectedFile,
            this.state.submissionTime + this.state.selectedFile.name 
        );

        
        api.postImage(formData)
          .then((res)=>{
            console.log(res);
          })
          
        console.log(this.state.selectedFile);
        console.log("The time was..." + this.state.submissionTime);
        
    };

    

    fileData = () => { 
   
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
              <h2>File Details:</h2> 
              <p>File Name: {this.state.selectedFile.name}</p> 
              <p>File Type: {this.state.selectedFile.type}</p> 
              <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              
            </div> 
          ); 
        } 
      }; 

    

      postItem = (postData) =>{
        console.log(postData)
        console.log(Number(postData.quantity))
        if(
          isNaN(postData.name) &&
          (Number(postData.quantity) > 0) &&
          isNaN(postData.type) &&
          isNaN(postData.condition) &&
          (Number(postData.price) > 0) &&
          (Number(postData.shippingCost) >= 0) &&
          this.state.selectedFile.size <= 1000000
          
          ){
        this.onFileUpload();       
        api.postItem(postData)
        }else{
          alert("Please check your submission to ensure you entered in the proper values. Only upload images up to 1 MB in size.")
        }
    
    };





    render(){
        return (
            
            <div>
                <HeaderBar
                handleInputChange={this.handleInputChange}
                saveCookie={this.saveCookie}
                SaveCookieTag={this.SaveCookieTag}
                />
                <PostItemFields
                postItem={this.postItem}
                onFileChange={this.onFileChange}
                onFileUpload={this.onFileUpload}
                imageName={this.state.selectedFileName}
                imageTime={this.state.submissionTime}
                itemSeller={this.state.itemSeller}
                />
                
                <div> 

          </div> 
        {this.fileData()} 
            </div>
            
            )
    }
}


export default PostItem3;