import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import member1 from '../assets/images/members/1646230591827.jpeg';
import member2 from '../assets/images/members/1686184449993.jpeg';
import member3 from '../assets/images/members/1704105715631.jpeg';

const members = [
  { name: 'Saj Hussain', designation: 'Fitness Industry & Investment CEO', image: member2 },
  { name: 'Adam Kiani', designation: 'Property Investor & Entrepreneur', image: member1 },
  { name: 'Zhagum Arshad', designation: 'Offshoring Innovator & Entrepreneurial Mentor', image: member3 },
];

function Member() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5" style={{ color: '#082c63' }}>
        Meet Our Members
      </h2>

      <div className="row g-4 justify-content-center">
        {members.map((member, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="card text-white"
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              }}
            >
              <div
                className="card-img-overlay d-flex flex-column justify-content-end align-items-center text-center"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))',
                  padding: '1rem',
                }}
              >
                <div>
                  <h4 className="card-title mb-1">{member.name}</h4>
                  <p className="card-text mb-0" style={{ fontSize: '1rem' }}>{member.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Member;
