
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Import Swiper React components




export default function App() {
  return (
    <>
     <section className="container my-5">
 
      
 <div className="row mb-4">
   <div className="col-md-6">
     <h1 className="fs-1" style={{ color: '#082c63' }}>Become a Member</h1>
     <h2 className="text-secondary">Benefit from our expert Services</h2>
   </div>
   <div className="col-md-6">
     <p className="fs-5">
       Join SMBF today and unlock a wealth of business and professional support services. From expert mentorship to vital business connections, we provide the tools you need for growth and success.
     </p>
   </div>
 </div>

 

 {/* Accordion Grid */}
 <div className="row g-4 mb-5">
   {[
     {
       title: 'Muslim International Markets',
       body: 'Access international markets with support for G2M strategies, business partnerships, and participation in international delegations. Executive members receive personalised advice and contracts for consultancy services as needed.',
     },
     {
       title: 'Muslim Venture Builder',
       body: 'Support members from the idea phase to execution. Submit your business idea and support needs, then follow up with our admin team.',
     },
     {
       title: 'Halal Funding Network',
       body: 'Connect with halal investors and funding sources through structured matchmaking opportunities and pitch days.',
     },
     {
       title: 'Business Mentorship Program',
       body: 'Receive personalized mentorship from experienced professionals across various industries to help you succeed.',
     },
   ].map((item, index) => (
     <div className="col-md-6" key={index}>
       <Accordion>
         <Accordion.Item eventKey={index.toString()}>
           <Accordion.Header>{item.title}</Accordion.Header>
           <Accordion.Body>{item.body}</Accordion.Body>
         </Accordion.Item>
       </Accordion>
     </div>
   ))}
 </div>
 </section>
    
    </>
  );
}

