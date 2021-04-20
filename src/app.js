import React from 'react'
import {Route} from 'react-router-dom';
import Mapping from './homePage/Mapping'
import Header from './homePage/Header';
import Footer from './homePage/Footer';
import SecondPage from './secondPage/secondPage';
import "./app.css"


const App = () => {

    return (  
      <div className="container">
      <Header/>
       <Route exact path='/' component={Mapping}/>
       <Route exact path='/:id' component={SecondPage}/> 
      <Footer/>
     </div>
    )
}
export default App
