import React from 'react'
import Link from 'gatsby-link'
import  {FlatButton}  from 'material-ui'
import Chip from 'material-ui/Chip'
import Explore from 'material-ui/svg-icons/action/Explore'
import IconButton from 'material-ui/IconButton'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { lightBlue900 } from 'material-ui/styles/colors'
import CardMedia from '@material-ui/core/CardMedia';
import "typeface-acme";
const handleClick = url => {
    window.open(url)
  }
const styles = {
    card: {
      width: 400,
      
    },
    special:{
        marginBottom: '200px',
        float: 'left',
          marginRight: '20px',
          marginLeft:'0px',
          marginTop: '50px',
      },
      appBar: {
        
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'white',
        fontFamily:"acme",
        color:lightBlue900,
        textAlign: "center",
        display: "flex",
    
    },
    media:{
        height: 0,
        paddingTop: '200px',
      },
      floats: {
          float: 'left',
          marginRight: '20px',
          marginLeft:'0px',
          marginTop:'50px'
         
      },
      rightMenu: {
        padding: 'auto auto',
        color: 'white',
        marginTop: '50px',
        backgroundColor:lightBlue900
      },
}
const photo = ({ data }) =>  (
    <div>
       
       <h3><i> <p style={styles.appBar}>
            What I like about photographs is that they capture a moment that's gone forever,
            impossible to reproduce
        </p></i></h3>
       
        <div style={styles.floats}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/insta8.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Chamundeshwari Temple
          </Typography>
          
        </CardContent>
        <IconButton
              tooltip="Explore"
              onClick={() => handleClick("https://www.instagram.com/p/BkB24fJBC2L/?hl=en&taken-by=amulyapokala")}>
              <Explore color={lightBlue900} />
            </IconButton>
      </Card>
      </div>
<div style={styles.floats}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/insta2.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Brindavan Gardens, Ooty
          </Typography>
          
        </CardContent>
        <IconButton
              tooltip="Explore"
              onClick={() => handleClick("https://www.instagram.com/p/Bjplv_GBI7G/?hl=en&taken-by=amulyapokala")}>
              <Explore color={lightBlue900} />
            </IconButton>
      </Card>
      </div>
      <div style={styles.floats}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/insta1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Pykara waterfalls, Pykara
          </Typography>
          
        </CardContent>
        <IconButton
              tooltip="Explore"
              onClick={() => handleClick("https://www.instagram.com/p/Bj2kxqthVUd/?hl=en&taken-by=amulyapokala")}>
              <Explore color={lightBlue900} />
            </IconButton>
      </Card>
      </div>
      <div style={styles.floats}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/insta3.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Bandipur forest, Bandipur
          </Typography>
          
        </CardContent>
        <IconButton
              tooltip="Explore"
              onClick={() => handleClick("https://www.instagram.com/p/BjoAutJhCsA/?hl=en&taken-by=amulyapokala")}>
              <Explore color={lightBlue900} />
            </IconButton>
      </Card>
      </div>
      <div style={styles.floats}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/insta4.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Brindavan Gardens, Ooty
          </Typography>
          
        </CardContent>
        <IconButton
              tooltip="Explore"
              onClick={() => handleClick("https://www.instagram.com/p/Bjlkd-IBSvB/?hl=en&taken-by=amulyapokala")}>
              <Explore color={lightBlue900} />
            </IconButton>
      </Card>
      </div>
      <div style={styles.floats}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/insta5.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Home sweet Home
          </Typography>
          
        </CardContent>
        <IconButton
              tooltip="Explore"
              onClick={() => handleClick("https://www.instagram.com/p/BjgibpbhgfN/?hl=en&taken-by=amulyapokala")}>
              <Explore color={lightBlue900} />
            </IconButton>
      </Card>
      </div>
      <div style={styles.special}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/insta6.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Home sweet Home
          </Typography>
          
        </CardContent>
        <IconButton
              tooltip="Explore"
              onClick={() => handleClick("https://www.instagram.com/p/BjckrbRhMmV/?hl=en&taken-by=amulyapokala")}>
              <Explore color={lightBlue900} />
            </IconButton>
      </Card>
      </div>
      <div style={styles.special}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/insta7.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Bandipur Forest
          </Typography>
          
        </CardContent>
        <IconButton
              tooltip="Explore"
              onClick={() => handleClick("https://www.instagram.com/p/Bj_f3G3B3Zw/?hl=en&taken-by=amulyapokala")}>
              <Explore color={lightBlue900} />
            </IconButton>
      </Card>
      <FlatButton
      style={styles.rightMenu}
      label="See More"
      onClick={() => handleClick("https://www.instagram.com/amulyapokala/?hl=en")}
    />
      </div>
</div>      
)

export default photo
