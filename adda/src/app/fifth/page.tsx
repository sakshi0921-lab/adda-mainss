'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/fifth.css'; 
import styles from '@/styles/home.module.css'; 
const Page = () => {
  return (
      <>
      
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
          <li><a href="list-property"><i className="fas fa-building"></i> Transfer</a></li>
          <li><a href="#"><i className="fas fa-list"></i> List Your Property</a></li>
        </ul>
      </nav>


      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('./background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-text">
          <h1>
            Turn your <br /> Space into a <br /> profitable stay
          </h1>
          <a href="#" className="btn">
            Get Started for free
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="container">
        <div className="box">
          <h2>Why List with Book My Adda?</h2>
          <ul>
            <li>Zero Listing Fees – List your property for free, pay only when you receive bookings.</li>
            <li>Boost Occupancy – Get access to thousands of daily active users.</li>
            <li>Fair Pricing Model – Our AI helps you manage revenue and price your stay for maximum profit.</li>
            <li>Property Management – Update availability, amenities, etc., anytime.</li>
            <li>24x7 Support – Dedicated account managers and professional support.</li>
          </ul>
        </div>

        <div className="box">
          <h2>How it Works?</h2>
          <ol>
            <li>Step 1: Sign Up & Add Your Property</li>
            <li>Step 2: Upload High-Quality Photos & Set Details</li>
            <li>Step 3: Get Verified & Go Live on Book My Adda</li>
            <li>Step 4: Receive Bookings & Manage Calendar</li>
            <li>Step 5: Payouts Sent Directly to Your Bank Account</li>
          </ol>
        </div>

        <div className="box">
          <h2>Pricing & Commission Model</h2>
          <ul>
            <li>
              <strong>Silver Plan</strong> (Free) – Pay 10–20% commission per booking
            </li>
            <li>
              <strong>Gold Plan</strong> (₹4999/year) – Featured listing, analytics, support
            </li>
            <li>
              <strong>Platinum Plan</strong> (₹9999/year) – Top rank, premium support, AI pricing
            </li>
          </ul>
        </div>

        <div className="box">
          <h2>Success Stories</h2>
          <p>{/* Intentionally left blank */}</p>
        </div>

        <div
          className="cta-button"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <button>Let’s get started!</button>
        </div>
      </section>

      {/* Footer */}
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

export default Page;
