import React from 'react';

export default function Signup() {
  const styles = {
    container: {
      display: 'flex',
      minHeight: '80vh',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2rem',
    },
    logo: {
      display: 'block',
      margin: '0 auto',
      height: '2.5rem',
      width: 'auto',
    },
    heading: {
      marginTop: '2rem',
      textAlign: 'center',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#333',
    },
    form: {
      marginTop: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      width: '100%',
      borderRadius: '0.25rem',
      padding: '0.375rem',
      border: '1px solid #ccc',
      color: '#333',
      boxShadow: 'none',
      placeholder: {
        color: '#666',
      },
      focus: {
        ringWidth: '2px',
        ringOffset: '2px',
        ringColor: 'indigo',
      },
    },
    button: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '0.25rem',
      padding: '0.375rem 1.5rem',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'indigo',
      boxShadow: 'none',
      hover: {
        backgroundColor: 'indigo',
      },
    },
    forgotPassword: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: 'indigo',
      hover: {
        color: 'darkblue',
      },
    },
    signUpLink: {
      marginTop: '1rem',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: 'indigo',
      hover: {
        color: 'darkblue',
      },
    },
  };

  return (
    <>
      <div style={styles.container}>
        <img
          style={styles.logo}
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 style={styles.heading}>Sign in to your account</h2>
        <form style={styles.form} action="#" method="POST">
          <div>
            <label style={styles.label} htmlFor="email">
              Email address
            </label>
            <div>
              <input
                style={styles.input}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <div style={{ ...styles.label, display: 'flex', justifyContent: 'space-between' }}>
              Password
              <a style={styles.forgotPassword} href="#">
                Forgot password?
              </a>
            </div>
            <div>
              <input
                style={styles.input}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div>
            <button type="submit" style={styles.button}>
              Sign in
            </button>
          </div>
        </form>
        <p style={styles.signUpLink}>
          Not a member?{' '}
          <a href="#" style={styles.signUpLink}>
            Start a 14-day free trial
          </a>
        </p>
      </div>
    </>
  );
}
