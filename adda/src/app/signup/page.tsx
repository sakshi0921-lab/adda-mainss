'use client';
import Link from 'next/link';
import styles from '@/styles/signup.module.css';
import { useState } from 'react';

export default function SignupPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup Data:', form);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['signup-box']}>
        <h2 className={styles['login-title']}>Create Your Account</h2>
        <form id="signup-form" onSubmit={handleSubmit} className={styles['form-group']}>
          <div className={styles['form-group']}>
            <label>First Name</label>
            <input name="firstName" onChange={handleChange} required />
          </div>
          <div className={styles['form-group']}>
            <label>Last Name</label>
            <input name="lastName" onChange={handleChange} required />
          </div>
          <div className={styles['form-group']}>
            <label>Email</label>
            <input name="email" type="email" onChange={handleChange} required />
          </div>
          <div className={`${styles['form-group']} ${styles['password-group']}`}>
            <label>Password</label>
            <input
              name="password"
              type={showPwd ? 'text' : 'password'}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className={styles['toggle-password']}
              onClick={() => setShowPwd(prev => !prev)}
            >
              <i className={`fas fa-eye${showPwd ? '-slash' : ''}`}></i>
            </button>
          </div>
          <button type="submit" className={styles['signup-btn']}>Sign Up</button>
        </form>
        <div className={styles['account-exists']}>
          Already have an account? <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
