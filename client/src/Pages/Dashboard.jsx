import React from "react";
import './Dashboard.css';

const campaigns = [
  { title: "Books for Bright Minds", progress: 70, goal: "$1000" },
  { title: "Food & Shelter Drive", progress: 45, goal: "$2500" },
  { title: "Back-to-School Kits", progress: 85, goal: "$1500" },
];

const sidebar =()=>{
  return (
    <div className="sidebar">
      <h3>Welcome Back, Somto</h3>
      <p>Get best discounts on certain days and don't miss it</p>
      <button className="explore-btn">Explore Now !!</button>
    </div>
  );
}
const FunderDashboard = ({ name = "Somto" }) => {
  return (
    <div className="dashboard">
      <header>
        <p>Your generosity is changing lives every day.</p>
      </header>


      <section className="stats">
        <div className="stat-card">💰 Total Funded: <strong>$12,300</strong></div>
        <div className="stat-card">👧 Children Helped: <strong>87</strong></div>
        <div className="stat-card">🏡 Orphanages Supported: <strong>5</strong></div>
      </section>

      <section className="campaigns">
        <h3>Ongoing Campaigns</h3>
        <div className="campaign-list">
          {campaigns.map((c, i) => (
            <div className="campaign-card" key={i}>
              <h4>{c.title}</h4>
              <p>Goal: {c.goal}</p>
              <div className="progress-bar">
                <div className="fill" style={{ width: `${c.progress}%` }}></div>
              </div>
              <p>{c.progress}% funded</p>
              <button>Donate</button>
            </div>
          ))}
        </div>
      </section>

      <section className="history">
        <h3>Recent Donations</h3>
        <ul>
          <li><strong>$500</strong> to Home of Hope (April 10)</li>
          <li><strong>$1,200</strong> to Faith Orphanage (March 29)</li>
          <li><strong>$800</strong> to LightUp Foundation (March 11)</li>
        </ul>
      </section>
    </div>
  );
};

export default FunderDashboard;
