import React, { useState } from 'react';
import PageHead from './PageHead';
import Footer from './Footer';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Hook to control navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);

        // Conditional redirect based on email
        if (email == 'admin@gmail.com') {
          history.push('/admin'); // Redirect to admin page
        } else {
          history.push('/userdashboard'); // Redirect to dashboard for all other users
        }
        

      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <PageHead tittle="welcome!" />
      <div className='container p-5'>
        <div className='row'>
          <div className='col-md-6 p-5'>
            <img className='login-image' src='/Assects/images/login-side.webp' alt='Login' />
          </div>
          <div className='col-md-6 p-5'>
            <div className='card p-5'>
              <div className='card-body'>
                <h2 className='text-center'>Login</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className='w-100 p-2'
                    />
                  </div>
                  <button type="submit" className='mt-5 w-50' style={{ backgroundColor: "#C3360C" }}>
                    Login
                  </button>
                  No Account? <Link to="/signup">Signin</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
