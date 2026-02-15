'use client';

import Head from 'next/head';
import Link from 'next/link';
import '../../styles/property.css';
import styles from '@/styles/home.module.css'; 

const PropertyAgreementPage = () => {
  return (
    <>
      <Head>
        <title>Property Listing Agreement</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
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
        <h1>Property Listing Agreement</h1>
        <p className="date">This agreement is made on <strong>21st February 2025</strong> between:</p>
        <p><strong>Book My Adda Pvt Ltd.</strong>, a company registered under the laws of India, with its registered office at [address]</p>
        <p><strong>Property Owner/Manager Name</strong>, the legal owner or authorized representative of the property located at <strong>Property Address</strong>.</p>

        {[
          {
            title: 'Scope of Agreement',
            content: 'The Host agrees to list their property on Book My Adda\'s platform for the purpose of short-term accommodation bookings. This agreement governs the rules of listing, booking management and revenue share.'
          },
          {
            title: 'Listing Terms & Obligations',
            points: [
              'The Host shall provide accurate details about the property including images, pricing, availability and house rules.',
              'The Host agrees to maintain the property in a clean and hospitable condition for guests.',
              'The Host shall provide updated availability and pricing in real-time.',
              'The Platform reserves the right to remove or modify a listing that violates terms or receives multiple complaints.'
            ]
          },
          {
            title: 'Commission & Payment Terms',
            points: [
              'The Host agrees to pay the platform a commission on every successful booking as per the selected plan.',
              'Payouts to the Host will be processed within 10 days after the guest checks out.',
              'The Host is responsible for any applicable taxes on earnings and agrees to comply with local taxation laws.'
            ]
          },
          {
            title: 'Cancellation & Refunds',
            points: [
              'The Host must specify their cancellation policy (Flexible, Moderate, Strict) at the time of listing.',
              'In the event of cancellation by the Platform, they may be subject to penalties as per the refund conditions on the Platform’s cancellation policy.',
              'Refunds to guests will be handled as per the Host’s chosen cancellation policy and the Platform’s service guidelines.'
            ]
          },
          {
            title: 'Liability & Indemnification',
            points: [
              'The Platform is not liable for any damages, theft, or incidents occurring at the Host’s property.',
              'The Host agrees to indemnify the Platform from any legal claim arising from the Host or any third-party.',
              'The Host shall carry appropriate insurance coverage for their property and operation.'
            ]
          },
          {
            title: 'Termination & Breach',
            points: [
              'Either party may terminate this agreement with a 10-day prior written notice.',
              'The Platform may terminate this agreement immediately if the Host engages in fraudulent activity, violates terms, or receives multiple guest complaints.'
            ]
          }
        ].map((section, i) => (
          <section key={i}>
            <h2>{i + 1}) {section.title}</h2>
            {section.content && <p>{section.content}</p>}
            {section.points && (
              <ol>
                {section.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
              </ol>
            )}
          </section>
        ))}

        <h2>7) Governing Law & Dispute Resolution</h2>
        <p>This Agreement shall be governed by the laws of India. 
        Any dispute shall be resolved through arbitration in [City], and the decision shall be final and binding on both parties.</p>

        <h2>8) Acceptance</h2>
        <p>By signing below, both parties agree to the terms and conditions outlined in this contract.</p>

        <div className="signature">
          <p><strong>For Book My Adda Pvt Ltd</strong><br />
          Authorized Representative<br />
          Designation:<br />
          Date:</p>

          <p><strong>For Host (Property Owner/ Manager Name)</strong><br />
          Name:<br />
          Signature:<br />
          Date:</p>
        </div>

        <button className="plan-button">Select your Listing Plan</button>
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

export default PropertyAgreementPage;
