import React from 'react'
import { AppBar, FlatButton } from 'material-ui'
import { Carousel } from 'react-responsive-carousel'
import Link from 'gatsby-link'
import "typeface-acme"
import { lightBlue900 } from 'material-ui/styles/colors'

import { render } from "react-dom";
const styles = {
    
    appBar: {
        
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'white',
        fontFamily:"acme",
        color:lightBlue900,
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
  
    zDepth={0}
    iconElementRight={rightMenuItems}
    style={styles.appBar}
  />
)

export default Nav
