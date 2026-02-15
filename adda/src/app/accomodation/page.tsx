"use client";

import React, { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "@/styles/2.css";
import Link from "next/link"; 
import styles from "@/styles/home.module.css";


const FilterPage = () => {
  useEffect(() => {
    flatpickr("#checkin", {
      dateFormat: "d M Y",
    });

    flatpickr("#checkout", {
      dateFormat: "d M Y",
    });
  }, []);

  const openFilter = () => {
    const popup = document.getElementById("filterPopup");
    if (popup) popup.style.display = "block";
  };

  const closeFilter = () => {
    const popup = document.getElementById("filterPopup");
    if (popup) popup.style.display = "none";
  };

  return (
    <div>
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

      <nav className="navigation">
        <ul>
           <li><Link href="/accomodation"><i className="fas fa-hotel"></i> Accommodations</Link></li>
          <li><a href="/coming"><i className="fas fa-plane"></i> Flights</a></li>
          <li><a href="/fifth"><i className="fas fa-box"></i> Packages</a></li>
          <li><a href="/list-property"><i className="fas fa-building"></i> Transfer</a></li>
          <li><a href="/propertylisting"><i className="fas fa-list"></i> List Your Property</a></li>
        </ul>
      </nav>

      <section className="search-section">
        <div className="search-boxes">
          <div className="find-me-heading">
            <span>FIND MY&nbsp;</span>
            <select id="searchType">
              <option value="hotel">HOTEL</option>
              <option value="stay">STAY</option>
            </select>
            <button className="filter-btn" onClick={openFilter}>
              <i className="fas fa-sliders-h"></i> FILTER
            </button>
          </div>
          <input type="text" placeholder="Location or Hotel (City, Area)" />
          <input type="text" id="checkin" placeholder="Check-in (dd mmm yyyy)" />
          <input type="text" id="checkout" placeholder="Check-out (dd mmm yyyy)" />
          <input type="number" placeholder="No. of Rooms" />
          <input type="number" placeholder="No. of Guests" />
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "18px" }}>
          <button className="submit-btn-custom">
            <i className="fas fa-search"></i> SUBMIT
          </button>
        </div>
      </section>

      <div id="filterPopup">
        <h3>
          Filter By:
          <button id="closeIcon" onClick={closeFilter} title="Close">
            &times;
          </button>
        </h3>
        <div className="filters-grid">
          <div>
            <strong>Popular filters</strong><br />
            <input type="checkbox" /> Free cancellation<br />
            <input type="checkbox" /> Breakfast included<br />
            <input type="checkbox" /> Entire homes & apartments<br />
            <input type="checkbox" /> Hotels<br />
            <input type="checkbox" /> Air conditioning<br />
          </div>
          <div>
            <strong>Property type</strong><br />
            <input type="checkbox" /> Entire homes & apartments<br />
            <input type="checkbox" /> Apartments<br />
            <input type="checkbox" /> Hotels<br />
            <input type="checkbox" /> Resorts<br />
            <input type="checkbox" /> Bed and breakfasts<br />
          </div>
          <div>
            <strong>Meals</strong><br />
            <input type="checkbox" /> Self catering<br />
            <input type="checkbox" /> Breakfast included<br />
            <input type="checkbox" /> All-inclusive<br />
            <input type="checkbox" /> Breakfast & lunch included<br />
            <input type="checkbox" /> Breakfast & dinner included<br />
          </div>
          <div>
            <strong>Bed preference</strong><br />
            <input type="checkbox" /> Twin beds<br />
            <input type="checkbox" /> Double bed<br />
          </div>
          <div>
            <strong>Distance from centre of New Delhi</strong><br />
            <input type="checkbox" /> {"<"} 1 km<br />
            <input type="checkbox" /> {"<"} 3 km<br />
            <input type="checkbox" /> {"<"} 5 km<br />
          </div>
          <div>
            <strong>Review score</strong><br />
            <input type="checkbox" /> Superb: 9+<br />
            <input type="checkbox" /> Very good: 8+<br />
            <input type="checkbox" /> Pleasant: 7+<br />
          </div>
          <div>
            <strong>Reservation policy</strong><br />
            <input type="checkbox" /> Free cancellation<br />
            <input type="checkbox" /> Book without credit card<br />
            <input type="checkbox" /> No prepayment<br />
          </div>
          <div>
            <strong>Facilities</strong><br />
            <input type="checkbox" /> Free WiFi<br />
            <input type="checkbox" /> Parking<br />
            <input type="checkbox" /> Non-smoking rooms<br />
            <input type="checkbox" /> Family rooms<br />
            <input type="checkbox" /> Fitness centre<br />
          </div>
          <div>
            <strong>Room facilities</strong><br />
            <input type="checkbox" /> Air conditioning<br />
            <input type="checkbox" /> Kitchen/kitchenette<br />
            <input type="checkbox" /> Washing machine<br />
            <input type="checkbox" /> Hot tub<br />
            <input type="checkbox" /> Private pool<br />
          </div>
          <div>
            <strong>Property accessibility</strong><br />
            <input type="checkbox" /> Entire unit wheelchair accessible<br />
            <input type="checkbox" /> Toilet with grab rails<br />
            <input type="checkbox" /> Roll-in shower<br />
            <input type="checkbox" /> Lift<br />
            <input type="checkbox" /> Auditory guidance<br />
          </div>
        </div>
        <button id="closeFilter" onClick={closeFilter}>Close</button>
      </div>

  {/*<section className="about-us">
        <h2>
          <i className="fas fa-info-circle"></i> About Us
        </h2>
        <p>
          <strong>Welcome to Book My Adda – "Your Travel, Your Adda"</strong>
        </p>
        <p>
          At Book My Adda, we aim to redefine travel by making it seamless, secure, and organized...
        </p>
        <p><strong>Our Mission</strong></p>
        <p>
          To revolutionize travel booking by offering a seamless, transparent, and personalized experience...
        </p>
        <p><strong>Our Vision</strong></p>
        <p>
          To become India's most trusted and preferred travel-booking platform...
        </p>
        <p><strong>Who We Serve?</strong></p>
        <p><strong>B2B –</strong> Corporate clients, event planners, and travel agencies...</p>
        <p><strong>B2C –</strong> Individual travelers seeking the best hotel deals...</p>
        <p><strong>Start your journey with us today!</strong></p>
      </section>*/}

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
    </div>
  );
};

export default FilterPage;
