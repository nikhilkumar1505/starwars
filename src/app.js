import React from 'react'
import {Route} from 'react-router-dom';
import Mapping from './homePage/homepage/Mapping'
import Header from './homePage/header/Header';
import Footer from './homePage/footer/Footer';
import SecondPage from './characterListPage/listPage/secondPage';
import "./app.css";

const App = () => {

    return (  
      <div className="container">
      <Header/>
       <Route exact path='/' component={Mapping}/>
       <Route  path='/:id' component={SecondPage}/>
      <Footer/>
     </div>
    )
}
export default App
