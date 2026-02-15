'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../../styles/pricing.css';
import styles from '@/styles/home.module.css'; 


const PricingPlansPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pricing Plans</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.logo}>BOOK MY ADDA</h1>
        <nav className={styles.nav}>
          <button>Support</button>
          <button onClick={() => document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" })}>
            About Us
          </button>
          <button>Connect</button>
          <Link href="/login"><button>Login/Signup</button></Link>
          <button><i className="fas fa-user"></i> Profile</button>
        </nav>
      </header>

      <nav className={styles.navigation}>
        <ul>
           <li><Link href="/accomodation"><i className="fas fa-hotel"></i> Accommodations</Link></li>
          <li><a href="/coming"><i className="fas fa-plane"></i> Flights</a></li>
          <li><a href="/fifth"><i className="fas fa-box"></i> Packages</a></li>
          <li><a href="/list-property"><i className="fas fa-building"></i> Transfer</a></li>
          <li><a href="/propertylisting"><i className="fas fa-list"></i> List Your Property</a></li>
        </ul>
      </nav>

      <div className="header">
        <h1>Maximize your Bookings - Choose the best Plan for You!</h1>
        <p>Flexible plans for every host, from free to premium promotions!!</p>
      </div>
      
      <div className="pricing-table">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th className="plan-card silver">
                <i className="fas fa-medal"></i> Silver <span className="dot silver-dot"></span>
                <br /><span className="plan-desc">Basic</span>
              </th>
              <th className="plan-card gold">
                <i className="fas fa-crown"></i> Gold <span className="dot gold-dot"></span>
                <br /><span className="plan-desc">Popular</span>
              </th>
              <th className="plan-card platinum">
                <i className="fas fa-gem"></i> Platinum <span className="dot platinum-dot"></span>
                <br /><span className="plan-desc">Premium</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Listing Fee</td><td>₹0</td><td>₹4,999/year</td><td>₹9,999/year</td></tr>
            <tr><td>Commission</td><td>7% per booking</td><td>5% per booking</td><td>3% per booking</td></tr>
            <tr><td>Featured Listing</td><td className="cross">❌</td><td className="tick">✅</td><td className="tick">✅<br /><span className="small"> (Homepage & Top Rankings)</span></td></tr>
            <tr><td>Advanced Analytics</td><td className="cross">❌</td><td className="tick">✅</td><td className="tick">✅</td></tr>
            <tr><td>Customer Support</td><td>Standard</td><td>Priority</td><td>24/7 dedicated manager</td></tr>
            <tr><td>Marketing Boost</td><td className="cross">❌</td><td className="tick">✅</td><td className="tick">✅<br /><span className="small">Ads & Promotions</span></td></tr>
            <tr><td>Cancellation Flexibility</td><td>Standard</td><td>Medium</td><td>High</td></tr>
          </tbody>
        </table>
        <button className="pay-btn">Continue to Pay</button>
      </div>

      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
          <p>&copy; 2025 Book My Adda | All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default PricingPlansPage;