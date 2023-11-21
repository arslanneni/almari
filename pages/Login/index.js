import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "src/app/globals.css"
import styles from '../../public/styles/Login.module.css';

export default function Login() {
  return (
    <div>
      <section className={styles.container}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className={styles.card}>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="image-container items-center mb-4">
              <Image src="/Almari.png" alt={"Logo"} width={50} height={50} />
              </div>
              <h1 className={styles.title}>Sign In To The Almari</h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Username
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={styles.inputField}
                    placeholder="Username"
                    required=""
                  />
                </div>
                <div className={styles.formGroup}>
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
                <div className={styles.checkboxGroup}>
                    <div className={styles.checkboxDiv}></div>
                    <div className={styles.checkboxLabel}>Remember me</div>
                  </div>
                {/* <Link href="/forgot-password">
                  <a className={styles.forgotPassword}>{"Forgot password?"}</a>
                </Link> */}
                <button type="submit" className={styles.button}>
                  Sign in
                </button>
                <p className={styles.signupLink}>
                  Don’t have an account yet?{' '}
                 
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
