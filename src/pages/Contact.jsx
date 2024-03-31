import React, { useState } from "react";
import Card from '@mui/joy/Card';
import screen from '../assets/contact.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import emailjs from 'emailjs-com';
import {toast} from 'react-toastify';


 const Contact =()=> {

    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [message ,setMessage] = useState("")
    const [isSending, setIsSending]= useState("false")

    const deleteEmail =()=> {
        setName("");
        setEmail("");
        setMessage("");
    } 

    const sendEmail =()=> {
        setIsSending(true);
        const templateParams = {
          from_name: name,
          message,
          reply_to: email,
    }
 

    emailjs.send(
        "service_p1hky9m",
        "template_pxcuhor",
        templateParams,
        "user_Xn5rFatptbtducr7Ldw2R"
      )
      .then((res) => {
        toast.success("Message sent successfully");
        deleteEmail();
      })
      .catch((err) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsSending(false);
      });
  }

        return (
            <>
             <div className="about__container">
             <Card style={{ width: '30%', height: 330, marginLeft: 50 ,
              backgroundColor: 'rgb(8, 8, 45' ,
              border: '1px solid rgb(8, 8, 45'}}>
               <img className="screen" src={screen} alt="screen-view"  style={{ objectFit: 'cover'}}/> 
                   
              </Card>

            <Card style={{ width: '40%',
            height: 330 , marginLeft: 70, 
            backgroundColor: 'rgb(8, 8, 45' ,
            border: '1px solid rgb(8, 8, 45' }}>

            <div className="main__contact_details">
            <div className="contact___header">
                <Typography className="desc__header">
                 Contact Us
                </Typography>
              </div>
              <div className="contact__fields">
                <ul>
                    <li className="list__items">
                        <Input style={{ marginBottom: '1.5rem' }} placeholder="name"
                           type="text"
                           name="name"
                           onChange={(e) => setName(e.target.value)}
                           value={name}
                        />
                    </li>
                    <li className="list__items ">
                      <Input  style={{ marginBottom: '1.5rem' }} placeholder="email"  
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      />
                    </li>
                    <li className="list__items ">

                    < Textarea placeholder="message"  style={{ marginBottom: '1.5rem' , height: 70}} 
                       name="message"
                       onChange={(e) => setMessage(e.target.value)}
                       value={message}
                    
                    />
                    </li>
                </ul>

                    <Button className="click__me"
                      type ="submit"
                       onClick={sendEmail}   
                    >       
                        { isSending ? "Sending..." : "Send Message"}
                    </Button >
                </div>

            </div>
            </Card>
          
            </div>
          
            </>
                   
        )
    }

    export default Contact;