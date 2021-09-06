import React, {  } from 'react';
import logo from './logo.svg';
import {Menu} from './ComponentMixing';

function Header(){
    return (
        <div className="custome--header">
          <div className="custome--header--left">
             <img src={logo} className="App-logo" alt="logo" width="150"/>
          </div>
          <div className="custome--header--right">
             <Menu />
          </div>
        </div>
    )
}

export default Header;