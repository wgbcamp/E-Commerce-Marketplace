import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';





export default function SearchAppBar(props) {
    
    if( localStorage.getItem("account") == (null) || localStorage.getItem("account") == ""){
        return (null);
      }

  return (

    <div>

            <Link to="/post" style={{textDecoration: 'none', color:'white'}}><Button color="inherit">sell an item</Button></Link>
            <Link to="/sellerHistory" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">seller history</Button></Link>
            <Link to="/orderHistory" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">order history</Button></Link>
            
            
    </div>
    
  );
}
