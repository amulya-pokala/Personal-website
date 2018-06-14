import React from 'react'
import Link from 'gatsby-link'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import Helmet from 'react-helmet'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "typeface-acme"
import { lightBlue900 } from 'material-ui/styles/colors'
const styles = {
  row: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#222",
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
      title: {
        textAlign: "center",
      },
      card: {
        width: '345px',
    },
    media:{
      height: 0,
      paddingTop: '200px',
    },
    floats: {
        float: 'left',
        marginRight: '20px',
        marginLeft:'60px',
        marginTop: '50px',
    },
    
}

const IndexPage = ({ data }) => (
  <div>
    <Helmet
      title="Amulya Pokala"
      meta={[
        {
          name: 'description',
          content: 'Personal website of Amulya Pokala.',
        },
        {
          name: 'keywords',
          content:
            'amulya, amulya pokala, developer, photographer, singer',
        },
        {
          name: 'og:title',
          content:
            'Amulya Pokala',
        },
        {
          name: 'og:description',
          content:
            'A website of Amulya to showcase everything she has got at one place',
        },
        {
          name: 'og:url',
          content:
            'http://amulyapokala.com',
        },
        
      ]}
    />
     <div className="row">
    <div className="title">
    <div style={styles.appBar}>
    <i><p>Magic happens when you don't give up, even though you want to. The universe always falls
        in love with a stubborn heart
  </p>  </i>
   
     
  </div>
      <h1>Amulya Pokala </h1>
      
      <p>Me == Developer + Singer + Painter + amateur photographer + many more to come</p>
      <div className="content">
        <p>
        
        A person who wants to make this world a better place to live by helping 
        herself and others to achieve more through technology.Period
        </p>
      </div>
    </div>
 </div>
 <div>
    
  <div style={styles.floats}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/proj.jpg"
          title="See all projects done by Amulya"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Projects
          </Typography>
          
        </CardContent>
        <CardActions>
          <Link to="/projects/">
          <Button size="small" color="primary">
            See All
          </Button>
          </Link>
          
        </CardActions>
      </Card>
      
    </div>
    <div style={styles.floats}><Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/photo.jpeg"
          title="See all Photographs taken by Amulya"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Photography
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            See All
          </Button>
          
        </CardActions>
      </Card>
      </div>
      <div style={styles.floats}><Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/writings.jpg"
          title="articles written by amulya"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Writings
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://medium.com/@amulya22pokala/latest">
            See All
          </Button>
          
        </CardActions>
      </Card>
      </div>
      <div style={styles.floats}><Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/music.jpg"
          title="Listen to songs sung by Amulya"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Carnatic music
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            See All
          </Button>
          
        </CardActions>
      </Card>
      </div>
      <div style={styles.floats}><Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image="/img/drawing.jpg"
          title="See all paintings  by Amulya"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Paintings
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            See All
          </Button>
          
        </CardActions>
      </Card>
      </div>

  
  </div>
  </div>
)


export default IndexPage