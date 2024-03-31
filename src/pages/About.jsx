import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import view from '../assets/khan.jpg'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Paper from '@mui/material/Paper';
import './page.css'
import Bootstrap from '../assets/skills/bootstrap.png'
import Css from '../assets/skills/css.png'
import Git from '../assets/skills/Git.jpg'
import Github from '../assets/skills/github.png'
import HTML from '../assets/skills/HTML.png'
import JS from '../assets/skills/js.png'
import MU from '../assets/skills/Mui.png'
import Mysql from '../assets/skills/mysql-icon.png'
import Oracle from '../assets/skills/oracle.jpg'
import PHP from '../assets/skills/php.png'
import Frame from '../assets/skills/react.png'
import Wordpress from '../assets/skills/wordpress1.png'


const imagesList = [
  {
    id: 0,
    src: Bootstrap  ,
    alt: "bootstrap",

  },
  {
    id: 1,
    src: Css,
    alt: "Css",
  },
  {
    id: 2,
    src: Git,
    alt: "Git",
  },

  {
    id: 3,
    src: Github,
    alt: "Github",
  },

  {
    id: 4,
    src: Wordpress,
    alt: "wordpress",
  },
  {
    id: 5,
    src: HTML,
    alt: "HTML",
  },

  {
    id: 6,
    src: JS,
    alt: "js",
  },
  {
    id: 7,
    src: MU,
    alt: "Mu",
  },
  {
    id: 8,
    src: Oracle,
    alt: "oracle",
  },
  {
    id: 9,
    src: PHP,
    alt: "PHP",
  },

  {
    id: 10,
    src: Mysql,
    alt: "MYSQL",
  },
  {
    id: 11,
    src: Frame,
    alt: "frame",
  },
 
];



const About =()=> {


const [open,setOpen]= useState(false);




  return (
    <>
     <div className="about__container">
          <Card style={{ width: '30%', height: 330, marginLeft: 50 ,
            backgroundColor: 'rgb(8, 8, 45' ,
            border: '1px solid rgb(8, 8, 45'}}>

            <h1 className="main__header">Osman Shaw</h1>
              <Typography className="desc__about">
              As a Front-end developer with over three years of professional experience, I have a strong skillset in Javascript and Php. I am proficient in using ReactJS to build efficient and user-friendly web applications and a solid grasp of REST APIs for seamless and dynamic user experiences.
              I like what I’m currently doing  which is Web Development… and very much interested in Forex Trading & Data Analysis. 
              </Typography>

                <Button  style={{ width: '30%', marginTop: '2.5rem', 
                height: '2.5rem' }} className="click__me" onClick={() => setOpen(true)}> 
                  read more
                </Button >
              </Card>
        <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'}}
      >
        <Sheet
            
            sx={{
            maxWidth: 800,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            backgroundColor: 'rgb(8, 8, 45)'
          }}>
          <ModalClose variant="plain" sx={{ m: 1 }}/>
           <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            className='model__headings'
            fontWeight="lg"
            mb={2} >
          
          <h1 className="modal___title">Skills</h1>
          These are the technologies, frameworks, and utilities with which I have experience.
          </Typography>

          <Grid container spacing={2} sx={{ p: 2 }}>
           {imagesList.map(image => (
            <Grid key={image.id} item xs={6} sm={4} md={3} lg={2}>
              <Paper sx={{ p: 2, textAlign: 'center', height:'50%', width: '50%'}}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ maxWidth: '100%'}}
                />
                {/* <Typography variant="subtitle1">Image {index + 1}</Typography> */}
              </Paper>
            </Grid>
          ))}
        </Grid>




        
        </Sheet>
      </Modal>

           <Card style={{ width: '40%',
            height: 330 , marginLeft: 70, 
            backgroundColor: 'rgb(8, 8, 45' ,
            border: '1px solid rgb(8, 8, 45' }}>
            <img className="sceenary" src={view} alt="about-view"  style={{ objectFit: 'cover',}} />

                <div className="container__me">
                  <Typography className="locate__me">
                  Email:shawosman090@gmail.com <br/>
                
                  Phone:+233 55 415 356 { } 
                  Freelance:Available
                  </Typography>
              </div>
        </Card >
       
       </div>
     
     </>
  )
}

export default About;
