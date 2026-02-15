'use client';

import React from 'react';
import '@/styles/3.css';
import styles from '@/styles/home.module.css'; 
import Link from 'next/link';

const HotelLayout: React.FC = () => {
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
          <li><a href="/pricing"><i className="fas fa-box"></i> Packages</a></li>
          <li><a href="/list-property"><i className="fas fa-building"></i> Transfer</a></li>
          <li><a href="/propertylisting"><i className="fas fa-list"></i> List Your Property</a></li>
        </ul>
      </nav>
     
    
    <div className="container">
      <header className="hotel-header">
        <h1>Hotel Olive Aero Suites</h1>
        <p className="address">Address Line Here, City, Country</p>

        <div className="trust-score-box">
          <h4>TRIPPY'S TRUST SCORE</h4>
          <div className="score">10</div>
          <p>Exceptional</p>
        </div>
      </header>
      

      <section className="hero-box">
        <div className="hero-gallery">
          <div className="main-image">Main Image</div>
          <div className="side-images">
            <div className="side-image">Slide 1</div>
            <div className="side-image">Slide 2</div>
            <div className="side-image">Slide 3</div>
            <div className="more-photos">Slide 4</div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="left-info">
          <h2 className="box-heading">Most Popular Facilities</h2>
          <div className="box-section">
            <div className="facility-tags"></div>
          </div>

          <div className="availability-header">
            <h2 className="box-heading availability-heading">Availability</h2>
            <button className="change-search-btn">Change Search</button>
          </div>

          <div className="box-section availability-box"></div>

          <h2 className="box-heading" style={{ marginTop: '34px' }}>House Rules</h2>
          <div className="box-section">
            <ul></ul>
          </div>
        </div>

        <div className="right-info">
          <h2 className="box-heading">Property Highlights</h2>
          <div className="box-section">
            <ul></ul>
          </div>

          <button className="reserve-btn">Reserve</button>

          <h2 className="box-heading">Guest Reviews</h2>
          <div className="box-section">
            <ul></ul>
          </div>
        </div>
      </section>
    </div>

    <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
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

export default HotelLayout;
