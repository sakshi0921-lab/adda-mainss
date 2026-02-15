'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import  '@/styles/coming.css';
import styles from '@/styles/home.module.css'; 

const ComingSoonPage = () => {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <div className="container">
        <img src="/image.png" alt="Earth Background" className="background" />
        <div className="glassmorphism-container">
          <h1>Coming Soon!</h1>
          <button className="notify-button">Notify Us</button>
        </div>
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

export default ComingSoonPage;
