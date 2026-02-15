'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../../styles/test.css'; 
import styles from '@/styles/home.module.css';
const Page = () => {
  return (
    <>
      <Head>
        <title>Book My Adda</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>

      {/* Header Section */}
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


      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-text">
          <h1>
            Turn your <br /> Space into a <br /> profitable stay
          </h1>
          <Link href="/4b" className="btn">
            Get Started for free
          </Link>
        </div>
      </section>

      {/* HOTELS LISTED */}
      <section className="listed-section">
        <h2>Hotels already listed with us</h2>
        <div className="api-placeholder" id="hotels-api">
          {/* API integration goes here */}
        </div>
      </section>

      {/* PARTNER HOMESTAYS */}
      <section className="listed-section">
        <h2>Our Partner Homestays & Villas</h2>
        <div className="api-placeholder" id="partners-api">
          {/* API integration goes here */}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p>&copy; 2025 Book My Adda | All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Page;
