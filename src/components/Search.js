import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';



class Search extends Component{
  
    constructor(props){
    super(props);
    this.state={
        query:'ART',
        search_books:[1]
    }
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
this.setState({query:e.target.value})
    }

    componentDidMount(){
        BooksAPI.search(this.state.query).then(books=>
            this.setState({search_books:books}));
    }
render(){
console.log(this.state.search_books);

  const ans=this.state.search_books.map((book)=>{
       
        return(

               

                    <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
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
<div>
<Link to='/home'>Home</Link>
</div>

<div>
<form>
    <label>
        Enter the category:
        <input type="text" value={this.state.query} onChange={this.handleChange}/>
    </label>
    <input type="submit" value="search"/>
</form>
</div>


<div className="bookshelf">
<ol className="books-grid">
  {ans}
  </ol>
</div>


</div>

);

}

}


export default Search;