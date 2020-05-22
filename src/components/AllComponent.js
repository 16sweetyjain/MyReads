import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'

class AllComponent extends Component{
  
    constructor(props){
    
super(props);
this.state={
   newBooks:[1]
}
    }

   
    handleSubmit(e){
        e.preventDefault();
    }
 
    componentDidMount(){
       BooksAPI.getAll().then(books=>
       this.setState({newBooks:books})
       
       );

    
    }
    render(){
        console.log(this.state.newBooks);
        const ans=this.state.newBooks.map((book)=>
        {

const back=book.imageLinks;
//const back1=back.thumbnail;
//console.log(back);
            return(
<li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:'url({back.smallThumbnail})' }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>
            );

        });

        return(

            

<div>
    {ans}
</div>
         
        );
    }
}

export default AllComponent;