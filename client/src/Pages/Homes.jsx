import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div className="background">
      <Navbar/>
      <div className="overlay">
        <h1 className="heading">
          Connecting Those that have <br />
          to Those that Need!
        </h1>
        <h4 className='text-fuchsia-50'>A web application that connects verified orphanages,
          <br/> shelters, underfunded schools, and other NGOs with people and organizations that want to help <br/>either through donations, mentorship, volunteering, or resources.</h4>
      </div>
      <div className="aboutus">
        <h1> About Us</h1>
        <h4> We are a foundation that wants to work <br/> 
          with verified orphanages, shelters, underfunded schools, and other NGOs to help them get the <br/> 
          resources they need. We want to connect them with people and organizations that want to help <br/> 
          either through donations, mentorship, volunteering, or resources. We are a team of passionate <br/> 
          individuals who believe that everyone deserves a chance to succeed. We are committed to making <br/> 
          a difference in the lives of those who need it most. </h4>

      </div>
    </div>
  );
};

export default Home;
