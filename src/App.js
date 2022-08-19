import React from 'react';
import{ BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import User from './User';
import Product from './Product';
import Order from './Order';
import Productchart from './Productchart';
import Orderchart from './Orderchart';

function App() {
  
return(
  <Router>
  <Header/>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/User' element={<User/>}/>
       <Route exact path='/Product' element={<Product/>}/>
       <Route exact path='/Order' element={<Order/>}/>
       <Route exact path='/Productchart' element={<Productchart/>}/>
       <Route exact path='/Orderchart' element={<Orderchart/>}/>
     </Routes>
  <Footer/>
</Router>
);
}

export default App;

