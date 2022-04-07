import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlayerList from './player/player-list';
import BookList from './book/book-list';
import PageNotFound from './page-not-found';
import Home from './Home';
import booksData from './book/book-data';
import BookImage from './book/book-image';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
const routing = (

      <Router>
	   <div>
	     <ul>
	     <li><Link to={'/'}>Home</Link></li>
		 <li><Link to = {'/playerlist'}>Player-List</Link></li>
		 <li><Link to = {'/booklist'}>Book List</Link></li>
		 </ul>
	   
	   <Routes>
	     <Route exact path='/' element={<Home />}/>
		 <Route path='/playerlist'  element={<PlayerList/>} />
		 
		 <Route path='/booklist'  element={<BookList books={booksData}/>}>
		 <Route path=':bno'  element={<BookImage/>} />
		 </Route>
		 <Route path='/*'  element={<PageNotFound />} />
	   </Routes>
	   
	   </div>
	  </Router>
	  
);

ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
