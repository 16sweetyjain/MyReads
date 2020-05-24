import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';
//import Options from '../shared/options';



class Search extends Component{
  
    constructor(props){
    super(props);
    this.state={
        query:'ART',
        selected:'',
        search_books:[1],
        allBooks:[1],
                show:false
     
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.addBook=this.addBook.bind(this);
    this.newHandleChange=this.newHandleChange.bind(this);
    }
    
addBook=(book)=>{
  if(this.state.selected== "currentlyReading"){
    this.props.addToCurrent(book);
   if(this.state.selected=="wantToRead")
        this.props.addToWant(book);
     if(this.state.selected=="read")
     this.props.addToRead(book);
  
  }
}
    handleChange(e){
this.setState({query:e.target.value})
    }
    newHandleChange= (e)=>{
      this.setState({ selected:e.target.value });
      e.preventDefault();
    
        
     
      console.log(`Option selected:`, this.state.selected);
      
    }

    componentDidMount(){
    
            BooksAPI.getAll().then(books=>
              this.setState({allBooks:books}))

    }

    handleSubmit(e){
     // alert('Your favorite flavor is: ' + this.state.query);
      this.setState({show:true});
        BooksAPI.search(e.target.value).then(books=>
       this.setState({search_books:books}));
      e.preventDefault();
    }
render(){
  console.log(this.state.query);
  const ans2=this.state.allBooks.map((book)=>
        {


            return(
<li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:'url({back.smallThumbnail})' }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled >Move to...</option>
                  <option value="currentlyReading" >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>
            );

        });
  const ans1=this.state.search_books.map((book)=>{
       
        return(

               

                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                          <div className="book-shelf-changer">
                            <select value={this.state.selected} onChange={(e)=>{this.newHandleChange(e);this.addBook(book)}}>
                         
                            <option value="move"  >Move to...</option>
                  <option value="currentlyReading" >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none" >None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                      </div>
                    </li>
           
            
               
   
        );

    });
    //console.log(this.state.allBooks);
   // console.log(this.state.search_books);
console.log((this.props.current));
   
return(
  <div>


<div>
<form onSubmit={this.handleSubmit}>
    <label>
        Enter the category:
        <input type="text" value={this.state.query} onChange={this.handleChange}/>
    </label>
    <input type="submit" value="search" />
</form>
</div>


 {this.state.show===true?<div className="bookshelf">
<ol className="books-grid">
  {ans1}
  </ol>
</div>
:<div className="bookshelf">
<ol className="books-grid">
  {ans2}
  </ol>
</div>}


</div>

);

}

}


export default Search;
