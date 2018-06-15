import React from 'react'
import { AppBar, FlatButton } from 'material-ui'
import { Carousel } from 'react-responsive-carousel'
import Link from 'gatsby-link'
import "typeface-acme"
import { white } from 'material-ui/styles/colors'

import { render } from "react-dom";
const styles = {
    
    appBar: {
        
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:white,
        fontFamily:"acme",
        textAlign: "center",
        display: "flex",
    
    },
  }

const rightMenuItems = (
  <div style={styles.appBar}>
    
     
  </div>
  
  
)

   

const Nav = ({ pathToPage }) => (
  <AppBar
    style={styles.appBar}
    zDepth={0}
    iconElementRight={rightMenuItems}
  />
)

export default Nav
