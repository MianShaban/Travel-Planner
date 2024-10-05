import React, { useState } from 'react';
import PageHead from './PageHead';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Optionally, you can clear the form here
        setName('');
        setEmail('');
        setPassword('');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <PageHead tittle="Register"/>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 p-5'>
            <div className='card p-5'>
              <div className='card-body'>
                <h2 className='card-title'>Signup</h2>
                <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" className='w-100 p-2' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className='mt-5 w-50 ' style={{backgroundColor:"#C3360C "}}>Signup </button>   Have Account? <Link to="login">login</Link>
      </form>
              </div>
            </div>
       
          </div>
          <div className='col-md-6 p-5'>
            <img className='w-100 mt-3' style={{borderRadius:"10px"}} src='/Assects/images/signup-side.webp'/>
          </div>
        </div>
       
      </div>
      <Footer/>
   
    </div>
  );
}

export default Signup;
