import React from 'react';
import heroImage from '../assets/images/hero-image.png'; 
import promoVideo from '../assets/videos/SaveTube.mp4'; 
import sideimage from '../assets/images/sideimage.png'; // Replace with your side image path


const HeroSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#2b77bf' }}>
      <div className="container">
        
        {/* First Row */}
        <div className="row align-items-top mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-1 text-white fw-semibold">
              Your Global Muslim Business Network
            </h1>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid mb-3"
              style={{ maxHeight: '300px' }}
            />
            <p className="text-light">
              SMBF is a global network of high-value Muslim businesses and professionals. We offer unparalleled opportunities, support, and connections to economically empower the Muslim Ummah globally.
            </p>
          </div>
        </div>

        <div className="row align-items-top">
          <div className="col-md-6 mb-4 mb-md-0">
            <video className="w-100 rounded" controls autoPlay muted loop>
              <source src={promoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="container my-5">
  <div className="row g-4">
    
   
  <div className="col-md-6">
  <div className="p-4 bg-white shadow rounded h-100">
    <h1 className="mb-3 fs-3" style={{ color: '#007bff' }}>£10M+</h1>
    <h2 className="mb-2 fs-5">Facilitated Trade</h2>
    <p>Over 8 figures facilitated in international trade, boosting the Muslim economy.</p>
  </div>
</div>


    
    <div className="col-md-6">
      <div className="p-4 bg-white shadow rounded h-100">
        <h1 className="fs-3 " style={{ color: '#007bff' }}>12+</h1>
        <h2 className="mb-2  fs-5">Countries</h2>
        <p>A thriving network ofMuslim businesses and professionals across 12 countries.</p>
      </div>
    </div>

  </div>
</div>
            </div>

          <div className="col-md-6 text-center">
            <img
              src={sideimage}
              alt="Hero"
              className="img-fluid mb-3 rounded"
              style={{ maxHeight: '650px' }}
            />
        
          </div>
        </div>
        
      </div>
    </section>
    
    
  );
};

export default HeroSection;
