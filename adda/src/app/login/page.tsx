'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import styles from '@/styles/login.module.css';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  // 🔐 Redirect if already logged in (JWT)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/';
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(
      'https://6773-2406-16c0-11a-1aab-d4a7-7583-b15d-ca10.ngrok-free.app/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error('LOGIN ERROR:', data);
      alert(data.message || 'Login failed');
      return;
    }

    localStorage.setItem('token', data.token);
    window.location.href = '/';
  } catch (err) {
    console.error(err);
    alert('Server error or CORS issue');
  } finally {
    setLoading(false);
  }
};



  return (
    <div className={styles.container}>
      <div className={styles['login-box']}>
        <h2 className={styles['login-title']}>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label>Email</label>
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className={styles['form-group']}>
            <label>Password</label>
            <input
              name="password"
              type="password"
              required
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={styles['submit-btn']}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* OPTIONAL: Google Login */}
        <div className={styles['social-login']}>
          <button
            className={`${styles['social-btn']} ${styles.google}`}
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            Sign in with Google
          </button>
        </div>

        <div className={styles['signup-link']}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" className={styles['signup-link-anchor']}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
