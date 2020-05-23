import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Header extends Component{

    render(){
        return(


          <div className="list-books">
          <div className="list-books-title">
         
                      
                           
            <h1>MyReads</h1>
            <ul>
        
        <li>   <Link to='/search'>Search</Link></li> 
        <li>
<Link to='/home'>Home</Link>
</li>
          

            </ul>
          </div>
</div>

          );

          };
        };


    export default Header;
        