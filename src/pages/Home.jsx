import React from "react";
import Typography from '@mui/material/Typography'; 
import profile from "../assets/osman.jpg"
import './page.css'
import Social from "../pages/Social"


const Home =() => {

    return (
                <div className="main__home__container">
                    <div className="main__profile__image">
                     <img className="profile__image" src={profile} alt="icon" />
                       {/* END LOGO */}
                      <div className="copyright">
                        <p className="copyright__main">&copy; {new Date().getFullYear()} Osmakhan</p>
                        <Social/>
                      </div>
                     
                     </div>
                     <div className="main__desc__container">
                        <h1 className="main__profile__header">Osman Shaw</h1>
                        <Typography className="main__content">
                        Fron-end developer with 3+ years of experience, strong in Javascript, HTML and CSS. Proficient ReactJS, skilled in building efficient web applications. Solid understanding of REST APIs, intermidiate level in Node.js for backend API development. Able to architect, enhance and recommend software designs, deliver high-quality work, and stay current with industry tools and technologies. Strong problem-solving skills and ability to understand and develop software for enterprises.
                        </Typography>
                        <Typography
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "mailto:shawosman090@gmail.com";
                            link.target = "_blank";
                            link.click();
                          }}
                          className="job"
                          style={{ cursor: "pointer" }}
                        >
                          shawosman090@gmail.com
                        </Typography>
                    </div>
            
                
                </div>
                
            )
        }
        export default Home