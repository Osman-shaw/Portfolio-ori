import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/joy/Card';
import Grid from '@mui/joy/Grid';
import { CardContent } from "@mui/joy";
import Webdev from '../assets/skills/Webdev.jpeg'
import DataAnalyst from '../assets/skills/Dataguy.png'
import ForexTrader from '../assets/skills/Forex.jpeg'
import Wordpress from '../assets/skills/wordpress.jpeg'


const myService =[
  {
    id: 0,
    src: Webdev ,
    alt: "web",

  },
  {
    id: 1,
    src: DataAnalyst  ,
    alt: "data",

  },
  {
    id: 2,
    src: ForexTrader  ,
    alt: "forex",

  },
  {
    id: 3,
    src: Wordpress ,
    alt: "wordpress",

  },
]

const Service=()=> {
    return (
      <>
   
        <div className="top__header__service">
        <h1 className="main__service__intro">Services</h1>
        </div>
        <Grid container spacing={2} style={{paddingTop: '60px'}}>
        <Grid item xs={6} >
         <Card style={{ width: '80%', height: '200px', marginLeft: 50 ,
            backgroundColor: 'rgb(8, 8, 45' , border: '2px solid #081545',
        }}>
          <div>
           <img src={Webdev}  alt= "web"  style={{ maxWidth: '15%'}}/>
             <h1 className="service__title">Web Developer</h1>
             <Typography className="para__content">
             Fron-end developer with 3+ years of experience, strong in Javascript, HTML and CSS. Proficient ReactJS, skilled in building efficient web applications
             </Typography>
          </div>
           </Card>
          </Grid>
          <Grid item xs={6}>
          <Card style={{ width: '80%', height: '200px' , marginLeft: 50,
           backgroundColor: 'rgb(8, 8, 45', border: '2px solid #081545'
        
        }}>
          <div>
          <img src={DataAnalyst}  alt= "web"  style={{ maxWidth: '15%'}}/>
            <h1 className="service__title">Data Analyst</h1>
             <Typography className="para__content">
            As a data analyst,my primary role is to collect, process, and analyze large sets of data to extract valuable insights that can inform decision-making within an organization
             </Typography>
          </div>
        </Card>
      </Grid>
    </Grid>
    <Grid container spacing={2} style={{ paddingTop: '20px' }}>
      <Grid item xs={6}>
        <Card style={{ width: '80%', height: '200px', marginLeft: 50 ,
              backgroundColor: 'rgb(8, 8, 45', border: '2px solid #081545'
      }}>
          <div>
          <img src={ForexTrader}  alt= "forex"  style={{ maxWidth: '15%'}}/>
              <h1 className="service__title">Forex Trader</h1>
             <Typography className="para__content">
             I specialize in analyzing currency pairs and executing strategic trades to make profitable return on price Actions
             </Typography>
          </div>
        </Card>
      </Grid>
       <Grid item xs={6}>
        <Card style={{ width: '80%', height: '200px', marginLeft: 50,
             backgroundColor: 'rgb(8, 8, 45', border: '2px solid #081545'
             
      }}>
          <div>
           <img src={Wordpress}  alt= "wordpress"  style={{ maxWidth: '15%'}}/>
             <h1 className="service__title">Wordpress Freelancer</h1>
             <Typography className="para__content">
             A WordPress Freelancer skilled in designing and developing digital solutions for clients.
             </Typography>
          </div>
        </Card>
      </Grid>
      </Grid>
      </>
    );
  }
  
  export default Service;
  



 
