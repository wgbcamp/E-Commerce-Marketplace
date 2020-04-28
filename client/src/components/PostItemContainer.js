import React, { Component } from "react";
import api from "../utils/api";
import PostItemFields from "./PostItemFields";
import HeaderBar from './HeaderBar';

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

        
        api.postImage(formData);
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
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 

    

      postItem = (postData) =>{
        console.log(postData)
        this.onFileUpload();
        
        api.postItem(postData)
           
    
    };





    render(){
        return (
            
            <div>
                <HeaderBar
                handleInputChange={this.handleInputChange}
                saveCookie={this.saveCookie}
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