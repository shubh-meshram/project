import { Component } from "react";
import { Link } from 'react-router-dom';




class Footer extends Component {
   render()
    {
        return ( 
          <footer className="text-center text-lg-start bg-light text-muted">
         
          
          <section>
            <br></br>
            <div className="container text-center text-md-start mt-5">
             
              <div className="row mt-3">
               
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Apna Tiffin
                  </h6>
                  <p>
                  Ghar ka khana just the way you want !!!
                  </p>
                </div>
                
    
    
               
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                 
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="/about" className="text-reset">ABOUT</a>
                  </p>
                  <p>
                    <a href="/contact" className="text-reset">CONTACT</a>
                  </p>
                  <p>
                    <a href="/signin" className="text-reset">SIGN IN</a>
                  </p>
                  <p>
                    <a href="/register" className="text-reset">REGISTER</a>
                  </p>
                </div>
                
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                 
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3"></i>  Hinjawadi ,pune</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@apnatiffin.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> +91xxxxxx</p>
                  <p><i className="fas fa-print me-3"></i> +91xxxxxx</p>
                </div>
               
              </div>
             
            </div>
          </section>
        
    
          
          <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="#">apnatiffin.com</a>
          </div>
         
        </footer>
        );
    }
}

export default Footer;