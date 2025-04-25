import logo from '../assets/images/SMBF-Logo-white-1024x342.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="text-light pt-5 pb-4 border-top rounded-top shadow-sm" style={{ backgroundColor: '#12284b' }}>
      <div className="container">
        <div className="row gy-4">
         
          <div className="col-md-3 ">
          <img src={logo} alt="Logo" height="40" />
            <p className="small mt-3">  
            Supporting Muslim businesses, through ethical and meaningful collaboration, to positively impact the world.
            </p>
            
          </div>

          
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="quickslinks" >Our Vision
              </a></li>
              <li><a href="#" className="quickslinks">Member Benefits
              </a></li>
              <li><a href="#" className="quickslinks">International Trades
              </a></li>
              <li><a href="#" className="quickslinks">Support us</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="quickslinks">Privacy Policy</a></li>
              <li><a href="#" className="quickslinks">Terms & Conditions</a></li>
              <li><a href="#" className="quickslinks">Event Registration Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <p className="quickslinks">0121 820 8259</p>
            <p className="quickslinks">enquiries@smbf.global</p>
            <button className="btn btn-primary w-100">Contact Us</button>
          </div>
        </div>

        <hr className="my-4" />
        <div className="text-center ">
          <p className=" small mb-0 text-light ">
            &copy; {new Date().getFullYear()} SMBF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
