import React from 'react'
import './Header.css'


function Header() {

    function goHome(){
        const value=true;
    }
    function goadd(){
        const value=false;
    }

  return (
    <div class="total">
        <div class="header">
            <p>Pied Piper</p>
        </div>
      <div class="navpart">
          <nav>
            <ul>
                <li><a href="" onClick={goHome}>Home</a></li>
                <li><a href="" onClick={goadd}>Add Records</a></li>
            </ul>
          </nav>
      </div>
      
    </div>
  )
}

export default Header;
