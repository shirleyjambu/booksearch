import React, {Component} from 'react';
import {Navbar} from 'react-bulma-components/full';
import {Link,NavLink} from 'react-router-dom';


const MyNavbar = props =>{
  
    return(
    <Navbar color="warning">
      <Navbar.Brand>
      <h1 className="title">
            Google Books
       </h1>
        <Navbar.Burger/>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item href="/" >Search</Navbar.Item>
          <Navbar.Item href="/saved" >Saved</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
    )
}

export default MyNavbar;