import React from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';
import about from '../assets/about.jpg';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <Navbar />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Connecting Those Who Have
              <span className="gradient-text"> to Those Who Need</span>
            </h1>
            <p className="hero-subtitle">
              A trusted platform that connects verified orphanages, shelters, underfunded schools, 
              and NGOs with generous people and organizations ready to help through donations, 
              mentorship, volunteering, and resources.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Giving</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="floating-cards">
            <div className="floating-card card-1">
              <div className="card-icon">❤️</div>
              <h3>10,000+</h3>
              <p>Lives Impacted</p>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🏠</div>
              <h3>500+</h3>
              <p>Organizations</p>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🤝</div>
              <h3>2,000+</h3>
              <p>Donors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">$2.5M+</div>
              <div className="stat-label">Donations Raised</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Cities Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Transparency Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={about} alt="About us" />
              <div className="image-overlay">
                <div className="play-button">▶</div>
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">
                Making Giving <span className="highlight">Trusted, Easy & Impactful</span>
              </h2>
              <p className="section-description">
                We bridge the gap between generosity and need, ensuring every donation reaches 
                the right hands and creates meaningful change in communities worldwide.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-number">01</div>
                  <div className="feature-content">
                    <h3>Verified Organizations</h3>
                    <p>Every NGO, orphanage, and shelter on our platform is thoroughly vetted and verified for authenticity and impact.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-number">02</div>
                  <div className="feature-content">
                    <h3>Transparent Impact</h3>
                    <p>Track your donations in real-time and see exactly how your contribution is making a difference in people's lives.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-number">03</div>
                  <div className="feature-content">
                    <h3>Community Building</h3>
                    <p>Join a network of like-minded individuals and organizations committed to creating positive social change.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="causes-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Causes</h2>
            <p className="section-description">Choose from various causes that matter to you</p>
          </div>
          
          <div className="causes-grid">
            {[
              {
                title: "Education",
                description: "Support underfunded schools and educational programs",
                image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
                raised: "$125,000",
                goal: "$200,000",
                progress: 62
              },
              {
                title: "Healthcare",
                description: "Provide medical aid and healthcare access",
                image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
                raised: "$89,500",
                goal: "$150,000",
                progress: 60
              },
              {
                title: "Emergency Relief",
                description: "Rapid response for disaster-affected communities",
                image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
                raised: "$67,200",
                goal: "$100,000",
                progress: 67
              }
            ].map((cause, idx) => (
              <div key={idx} className="cause-card">
                <div className="cause-image">
                  <img src={cause.image} alt={cause.title} />
                  <div className="cause-overlay">
                    <button className="donate-btn">Donate Now</button>
                  </div>
                </div>
                <div className="cause-content">
                  <h3 className="cause-title">{cause.title}</h3>
                  <p className="cause-description">{cause.description}</p>
                  <div className="progress-section">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: `${cause.progress}%`}}></div>
                    </div>
                    <div className="progress-info">
                      <span className="raised">{cause.raised} raised</span>
                      <span className="goal">of {cause.goal}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-description">Simple steps to make a difference</p>
          </div>
          
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-icon">🔍</div>
              <h3>Discover</h3>
              <p>Browse verified organizations and causes that align with your values</p>
            </div>
            <div className="step-item">
              <div className="step-icon">💝</div>
              <h3>Donate</h3>
              <p>Make secure donations through our trusted payment system</p>
            </div>
            <div className="step-item">
              <div className="step-icon">📊</div>
              <h3>Track Impact</h3>
              <p>See real-time updates on how your contribution is making a difference</p>
            </div>
            <div className="step-item">
              <div className="step-icon">🌟</div>
              <h3>Share</h3>
              <p>Inspire others by sharing your giving journey and impact stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join thousands of donors who are already creating positive change in their communities</p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Your Journey</button>
              <button className="btn-outline">Explore Organizations</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;