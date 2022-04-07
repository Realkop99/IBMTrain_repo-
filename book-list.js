import React , { Component } from 'react';
import { Outlet,Link } from 'react-router-dom';
export default class BookList extends Component 
{
	constructor(props)
	{
		super(props)
	}
	
	render()
	{
		return (
	
    <div>	
	<table align ="center" width="50%" border="1">
    <caption>Book Details</caption>
     <tr>
       <th>Book ID</th>
       <th>Book Name</th>
       <th>Author</th>
       <th>Price(in USD)</th>
       
      </tr>
      <tbody>
	  {this.props.books.map((book) => <tr>
                                      <td>
                                      <Link to = {`/booklist/${book.bno}`}>
										  {book.bno}
									 </Link>
									  </td>
	                                       
											<td>{book.bname}</td>
											<td>{book.Author}</td>
											<td>{book.Price_in_USD}</td>
	  
	                                     </tr>)
	  } 
	    
		
	  </tbody>
      
  
  
  </table>
  <Outlet/>
  </div>
		
		
		);
}

}
