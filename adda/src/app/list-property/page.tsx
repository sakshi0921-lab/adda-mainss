'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../../styles/list.css';
import styles from '@/styles/home.module.css'; 

const ListPropertyPage: React.FC = () => {
  const [fileUploads, setFileUploads] = useState<Record<number, string>>({});
  const [videoName, setVideoName] = useState<string>('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileUploads(prev => ({ ...prev, [idx]: file.name }));
    }
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoName(file.name);
    }
  };

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
          <li><a href="/list-property"><i className="fas fa-building"></i> Transfer</a></li>
          <li><a href="/propertylisting"><i className="fas fa-list"></i> List Your Property</a></li>
        </ul>
      </nav>

      <div className="container">
        <p className="title">Let’s fill the form and be one step closer to monetize your property</p>

        <div className="form-group">
          <label>Property Name</label>
          <input type="text" />

          <label>Property Type</label>
          <input type="text" placeholder="Hotel, Resort, Villa, Apartment, Homestay, etc." />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Edit this with Google Maps" />
        </div>

        <div className="row">
          <div>
            <label>City</label>
            <input type="text" />
          </div>
          <div>
            <label>State</label>
            <input type="text" />
          </div>
          <div>
            <label>ZIP Code</label>
            <input type="text" />
          </div>
        </div>

        <div className="upload-section">
          <label>Photos & Videos</label>
          <div className="upload-boxes">
            {[1, 2, 3, 4].map((num) => (
              <React.Fragment key={num}>
                <div
                  className="upload-box"
                  onClick={() => document.getElementById(`photo-upload-${num}`)?.click()}
                  title={fileUploads[num] || ''}
                  style={fileUploads[num] ? { background: '#4ade80' } : {}}
                >
                  {fileUploads[num] ? '✓' : '+'}
                </div>
                <input
                  type="file"
                  id={`photo-upload-${num}`}
                  accept="image/*,video/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileUpload(e, num)}
                />
              </React.Fragment>
            ))}
          </div>
          <button
            className="upload-btn"
            onClick={() => document.getElementById('video-upload')?.click()}
            title={videoName}
            style={videoName ? { background: '#4ade80' } : {}}
          >
            {videoName ? 'Video Uploaded!' : 'Upload Hotel Tour Video'}
          </button>
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            style={{ display: 'none' }}
            onChange={handleVideoUpload}
          />
        </div>

        <div className="row">
          <div>
            <label>No. of rooms available</label>
            <input type="text" />
          </div>
          <div>
            <label>Room Types</label>
            <input type="text" placeholder="Single, Double, Suite, Dorm, etc." />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Room Description</label>
            <input type="text" />
          </div>
          <div>
            <label>Price per Night</label>
            <input type="text" placeholder="Enter in thousands (₹)" />
          </div>
        </div>

        <label>Amenities & Facilities Checklist</label>
        <div className="checkboxes">
          {[...Array(3)].map((_, col) => (
            <div key={col}>
              {/* Replace with actual grouped amenities if needed */}
              {[...Array(15)].map((_, i) => (
                <label key={i}><input type="checkbox" /> Amenity {col * 15 + i + 1}</label>)
              )}
            </div>
          ))}
        </div>

        <button className="submit-btn">Move to Contract!</button>
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

export default ListPropertyPage;
