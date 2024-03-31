import React from "react";
import Card from '@mui/joy/Card';
import view from '../assets/cv.pdf'


const Resume =()=> {


    return (

      <>
      
       <Card style={{width: '80%', height: '60%', marginLeft: 80,
            backgroundColor: 'rgb(8, 8, 45' ,
            borderStyle: 'none',
            marginRight: 60
         
      }}>

         <iframe  src={view} title="PDF Viewer" width="100%" height="600px"
          style= {{paddingTop: '20px' ,  borderStyle: 'none'}}
         
         ></iframe>

        
        </Card>
      </>
    );
  }
  
  export default Resume;
  

  