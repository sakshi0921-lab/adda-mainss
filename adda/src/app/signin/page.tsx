// app/signin/page.tsx 
"use client";
import {redirect} from "next/navigation";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import "../styles/4b.css"; 
import styles from "@/styles/home.module.css"; 

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
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
        <h2>Sign in to manage your property</h2>

        <label htmlFor="username" className="username">
          Username
        </label>
        <input type="text" id="username" placeholder="Login Name or Login ID" />

        <button className="next-btn">Next</button>

        <p className="help-link">
          <a href="#">Having trouble signing in?</a>
        </p>

        <hr />

        <p className="help-text">
          Do you have questions about your property or the extranet? Visit{" "}
          <a href="#">Partner Help</a> or ask another question on the{" "}
          <a href="#">Partner Community</a>.
        </p>

        <Link href="/4a">
          <button className="create-btn">Create your partner account</button>
        </Link>
      </div>

      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <p>&copy; 2025 Book My Adda | All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default function SignInPage() {
  redirect("/login");
}

