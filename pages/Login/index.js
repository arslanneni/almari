import React from 'react';
import Link from 'next/link';
import styles from '../../public/styles/Login.module.css';

export default function Login() {
  return (
    <div>
      <section className={styles.container}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className={styles.logo}>
            Syringe
          </a>
          <div className={styles.card}>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className={styles.title}>Sign in to your account</h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className={styles.form-group}>
                  <label htmlFor="email" className={styles.label}>
                    Username
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={styles.input}
                    placeholder="Username"
                    required=""
                  />
                </div>
                <div className={styles.form-group}>
                  <label htmlFor="password" className={styles.label}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className={styles.input}
                    required=""
                  />
                </div>
                <div className={styles.checkbox-group}>
  <div className={styles.checkbox}></div>
  <div className={styles.checkbox-label}>Remember me</div>
</div>
                <Link href="/forgot-password">
                  <a className={styles.forgot-password}>Forgot password?</a>
                </Link>
                <button type="submit" className={styles.button}>
                  Sign in
                </button>
                <p className={styles.sign-up-link}>
                  Don’t have an account yet?{' '}
                  <Link href="/clinicSignup">
                    <a className="text-sky-600 font-semibold">Sign Up</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
