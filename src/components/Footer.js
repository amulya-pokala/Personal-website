import React from 'react'
import { lightBlue300 } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
const footerStyle = {
    backgroundColor: lightBlue300,
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    
  };
  
  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };
  
const styles = {
  
  links: {
    marginRight: 15,
    cursor: 'pointer',
  },
}

const currentYear = new Date().getFullYear()

const social_links = [
  {
    title: 'Twitter',
    location: '/img/twitter.png',
    url: 'https://twitter.com/AMULYA_POKALA',
  },
  {
    title: 'Facebook',
    location: '/img/fb.png',
    url: 'https://www.facebook.com/amulya.pokala.1',
  },
  {
    title: 'Instagram',
    location: '/img/instagram.png',
    url: 'https://www.instagram.com/amulyapokala',
  },
  {
    title: 'Github',
    location: '/img/github.png',
    url: 'http://github.com/amulya-pokala',
  },
  {
    title: 'Linkedin',
    location: '/img/linkedin.png',
    url: 'https://www.linkedin.com/in/amulya-pokala-596721108/',
  },
  {
    title: 'Mail',
    location: '/img/mail.png',
    url: 'mailto:amulya22pokala@gmail.com',
  },
  {
      title: 'Quora',
      location: '/img/Quora.png',
      url: 'https://www.quora.com/profile/Amulya-Pokala'
  }
]

const Footer = () => (
    
    <div style={phantomStyle}>
  <div style={footerStyle}>
    {social_links.map((link, id) => (
      <a href={link.url} target="_blank" key={id}>
        <img
          src={link.location}
          alt={link.title}
          width="30px"
          
          style={styles.links}
        />
      </a>
    ))}
    <p>&copy; Amulya Pokala. {currentYear}.</p>
  </div>
  </div>
)

export default Footer
