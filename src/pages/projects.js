import React from 'react'
import Link from 'gatsby-link'
import Chip from 'material-ui/Chip'
import Code from 'material-ui/svg-icons/action/code'
import IconButton from 'material-ui/IconButton'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { lightBlue900 } from 'material-ui/styles/colors'
const handleClick = url => {
  window.open(url)
}
const styles = {
  card: {
    minWidth: 275,
    marginTop:"30px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chipStyle:{
    margin: 4,
    color: {lightBlue900},
    float: "left",
  }
};



const Projects = () => (
  <div >
    <h1>Projects</h1>
    <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           AutoComplete using TRIE
          </Typography>
          <Chip style={styles.chipStyle}>
              Java
            </Chip>
          <Typography component="p"><br /><br />
            An efficeient AutoComplete feature with the help of TRIE datastructure<br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/auto-completion-using-trie-dataStructure")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>
   <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           Wordcloud using twitter API
          </Typography>
          <Chip style={styles.chipStyle}>
              Python
            </Chip>
          <Typography component="p"><br /><br />
            A Wordcloud generated using live tweets n any given topic (hashtag)<br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/wordcloud-twitter")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>
   <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           Wordcloud
          </Typography>
          <Chip style={styles.chipStyle}>
              Python
            </Chip>
          <Typography component="p"><br /><br />
            A wordcloud generated from the words in a file which is fed as input to the program<br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/wordcloud")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>
   <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           File Systems
          </Typography>
          <Chip style={styles.chipStyle}>
              C
            </Chip>
            <Chip style={styles.chipStyle}>
              Socket Programming
            </Chip>
          <Typography component="p"><br /><br />
            A simulation of the File System in the OS<br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/wordcloud-twitter")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>
   <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           Recommendations-A data analysis project
          </Typography>
          <Chip style={styles.chipStyle}>
              Python
            </Chip>
          <Typography component="p"><br /><br />
            Given few movie ratings by the person, top ten movies which are not watched by him/her are suggested. 
            Done using Pearsons coefficient <br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/Data-analysis-Recommendations")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>
   <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           TO DO List
          </Typography>
          <Chip style={styles.chipStyle}>
              Python
            </Chip>
            <Chip style={styles.chipStyle}>
              Django
            </Chip>
            <Chip style={styles.chipStyle}>
              AJAX
            </Chip>
            <Chip style={styles.chipStyle}>
              JQuery
            </Chip>
          <Typography component="p"><br /><br />
           A webapp which helps us to keep track of our to do tasks.<br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/To-do-list")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>
   <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           Mini social network
          </Typography>
          <Chip style={styles.chipStyle}>
              C
            </Chip>
          <Typography component="p"><br /><br />
           A small project which simulates the feature of Friends and Mutual Friends in facebook.
            Mainly used data structures are Graphs, TRIE, linked list. This project was done during my second year of engineering
            and it helped me get a hang on data structures and situations where each one can be used <br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/Mini-Social-Network")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>
   <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           Search Engine
          </Typography>
          <Chip style={styles.chipStyle}>
              Python
            </Chip>
          <Typography component="p"><br /><br />
            A simulation of search engine which uses page rank algorithm<br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>
   <div>
    <Card style={styles.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
           Arrow game
          </Typography>
          <Chip style={styles.chipStyle}>
              Python
            </Chip>
          <Typography component="p"><br /><br />
            A simple game done using PyGame library in Python. 
             <br />
          </Typography>
        </CardContent>
        <IconButton
              tooltip="Code"
              onClick={() => handleClick("https://github.com/amulya-pokala/")}>
              <Code color={lightBlue900} />
            </IconButton>
      </Card>
   </div>

  </div>
)


export default Projects