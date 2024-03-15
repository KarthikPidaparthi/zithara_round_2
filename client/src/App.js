import React from 'react';
import './MainHeader.css'
import AddUserData from './AddUserData';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import HomeData from './HomeData';



  

function App() {


  function Header(){
    return(
      <div class='hhh'>
        <div class='ggg'>
          <p>Pied Piper</p>
        </div>
        <div>
          <ul>
            <li ><Link className='nav-link text-info' to='/'>Home</Link></li>
            <li ><Link className='nav-link text-info' to='/addData'>Add Records</Link></li>
          </ul>
        </div>
      </div>
    )
  }
  


  return (

    <div class="fullpart">
        <BrowserRouter>       
        <Header/>
          <Routes>
            <Route path='/' element={<HomeData/>}></Route>
            <Route path='/addData' element={<AddUserData/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
