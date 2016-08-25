import React from 'react';
import {teal900} from 'material-ui/styles/colors';

export default class FooterAF extends React.Component {
  render(){
  const styles = {
   tabColor :{backgroundColor:teal900}
   }
    return(
      <div>
        <div className="container-fluid footer-distributed" id="footerAsset" style = {styles.tabColor}>
          <div className="row">
            <div className="container">

                <div className="footer-left">

                  <h3>About</h3>

                  <p className="footer-links">
                    <a href="#">Home</a>
                    ·
                    <a href="#">Blog</a>
                    ·
                    <a href="#">Pricing</a>
                    ·
                    <a href="#">About</a>
                    ·
                    <a href="#">Faq</a>
                    ·
                    <a href="#">Contact</a>
                  </p>

                  <p className="footer-company-name">AF Bank Group PLC &copy; 2015</p>
                </div>

                <div className="footer-center">

                  <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>21 Revolution Street</span> Paris, France</p>
                  </div>

                  <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 555 123456</p>
                  </div>

                  <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="#">assetfinance@af.com</a></p>
                  </div>

                </div>

                <div className="footer-right">

                  <p className="footer-company-about">
                    <span>We are there for you</span>
          					If you prefer not to use our 0345 number, you can also call us on 01733 347 007. General enquiries are available 24/7.
          				</p>

                  <div className="footer-icons">

                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                  </div>

                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
