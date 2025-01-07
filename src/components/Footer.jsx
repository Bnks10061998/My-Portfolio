import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={20}
                style={{color:"#fff",marginRight:"2rem"}}/>
              </div>
            <div>
              <p>
                Dindigul
              </p>
              <p>
                Tamilnadu
              </p>
            </div>

            
            <div className="phone">
              <h4>
                <FaPhone size={20}
                style={{color:"#fff",marginRight:"2rem"}}/>
                8760561318
                </h4>
            </div>

            <div className="email">
              <h4>
                <FaMailBulk size={20}
                style={{color:"#fff",marginRight:"2rem"}}/>
                banakasu4scot@gmail.com
                </h4>
            </div>


          </div>
            <div className="right">
              <h4>About the company</h4>
              <p>
                This is code, enjoy learning and knowledge sharing of new projects and challenges
              </p>
            </div>

          {/* <div className="social">
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          </div>

          <div className="social">
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          </div>

          <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          </div> */}


        </div>
    </div>
  )
}

export default Footer