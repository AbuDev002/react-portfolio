import React from 'react';
import { Link } from 'react-router-dom'
import { NavaBarSection, Logo, LogoText, UlList, ListItem, Anchor } from './style.js'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavaBarSection>
            
    <div className="container">
        
        <Logo>
            <LogoText>Ultra Profile</LogoText>
        </Logo>
        
        <UlList>
            <ListItem><Link to="/">Home</Link></ListItem>
            <ListItem><Anchor to="#">Work</Anchor></ListItem>
            <ListItem><Anchor to="#">Portfolio</Anchor></ListItem>
            <ListItem><Anchor to="#">Resume</Anchor></ListItem>
            <ListItem><Anchor to="#">Skills and Experience</Anchor></ListItem>
            <ListItem><Anchor to="#">About</Anchor></ListItem>
            <ListItem><Link to="/contact">Contact</Link></ListItem>
        </UlList>
    </div>
    
</NavaBarSection>
  )
}

export default Navbar;
