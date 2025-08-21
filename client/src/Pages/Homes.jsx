import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import about from '../assets/about.jpg';
import { ArrowRight, Heart, Users, Globe, Shield, Zap, Target } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Helping the Needy",
      description: "Connect with verified orphanages, shelters, and NGOs to provide essential support through donations and volunteering."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Trusted Giving",
      description: "All organizations are thoroughly vetted to ensure your contributions make a real impact."
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Community Driven",
      description: "Join a global community of donors, volunteers, and mentors creating positive change."
    }
  ];

  const impactStats = [
    { number: "50K+", label: "Lives Impacted" },
    { number: "200+", label: "Verified Organizations" },
    { number: "$2M+", label: "Donations Facilitated" },
    { number: "15", label: "Countries Reached" }
  ];

  const causeCategories = [
    {
      label: "Education",
      img: "/src/assets/education.png"
    },
    {
      label: "Medical",
      img: "/src/assets/medical.png"
    },
    {
      label: "Emergency",
      img: "/src/assets/emergency.png"
    },
    {
      label: "Child Welfare",
      img: "/src/assets/welfare.png"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <Navbar />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Connecting Those Who Have
              <span className="text-purple-800"> to Those Who Need</span>
            </h1>
            <p className="hero-subtitle">
              A trusted platform connecting verified orphanages, shelters, and NGOs with generous donors, volunteers, and mentors.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Start Giving <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary">
                Find Organizations
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="impact-stats">
        <div className="container">
          <div className="stats-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={about} alt="Making a difference together" className="about-img" />
              <div className="image-overlay">
                <Zap className="w-8 h-8 text-yellow-400" />
                <span>Instant Impact</span>
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">
                Giving Made <span className="gradient-text">Fun, Trusted & Easy</span>
              </h2>
              <p className="section-description">
                We connect verified organizations with passionate donors and volunteers through a transparent, secure platform.
              </p>
              <div className="features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

 
      <section className="causes-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Choose Your <span className="gradient-text">Cause</span>
            </h2>
            <p className="section-description">
              Support verified organizations across various causes that matter to you.
            </p>
          </div>
          <div className="causes-grid">
            {causeCategories.map((cause, index) => (
              <div key={index} className="cause-card">
                <div className="cause-image">
                  <img src={cause.img} alt={cause.label} className="cause-img" />
                  <div className="cause-overlay">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="cause-content">
                  <h3 className="cause-title">{cause.label}</h3>
                  <button className="cause-btn">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-description">
              Join our community of changemakers and start creating positive impact today.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};


export default Home;