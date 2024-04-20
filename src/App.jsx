import React from 'react'
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom'
import HomePageComponent from './Components/routes/HomePageComponent/HomePageComponent'
import ContactUsPageComponent from './Components/routes/ContactUsPageComponent/ContactUsPageComponent'
import AboutUsPageComponent from './Components/routes/AboutUsPageComponent/AboutUsPageComponent'
const App = () => {
  return (
 <Router>
   <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
        </li>
      <li>
        <Link to='/about'> About us</Link>
        </li>
      <li>
        <Link to='/contact'>Contact us</Link>
        </li>
    </ul>
   </nav>
<Routes>
  <Route exact path='/' element= {<HomePageComponent/>}></Route>
  <Route exact path='/about' element= {<AboutUsPageComponent/>}></Route>
  <Route exact path='/contact' element= {<ContactUsPageComponent/>}></Route>
</Routes>
</Router>
  )
}
export default App
