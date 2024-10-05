import React from 'react'
import PageHead from './PageHead'
import ContectForm from './ContectForm'
import Sponsers from './Sponsers'
import Footer from './Footer'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Blogs = () => {
  return (
    <>
      <PageHead tittle="Blogs"/>
      <div className='container-fluid'>


        <div className='row p-5'>
            <div className='col-md-4'>
            <div data-aos="flip-right">
            <div class="card blog-card mt-5" style={{width: "18rem;"}}>
  <img src="/Assects/images/blog-image-1.jpg" class="card-img-top blog-card-image" alt="..."/>
  <div class="card-body blog-card-body">
    <h4>Services</h4>
    <p class="card-text blog-card-text">
    We provide essential support, ensuring a smooth and enjoyable experience for travelers on their journeys.......... 
    <Link class="" to="/blogdetail"><b>Read More</b></Link>
    </p>
  </div>
</div>
</div>

            </div>
            <div className='col-md-4'>
            <div data-aos="flip-up">

            <div class="card blog-card mt-5" style={{width: "18rem;"}}>
  <img src="/Assects/images/blog-image-2.jpg" class="card-img-top blog-card-image" alt="..."/>
  <div class="card-body blog-card-body">
    <h4>Journeys Remastered</h4>
    <p class="card-text blog-card-text">
    It's a great way for beginners to explore a classic adventure with improved graphics and easy-to-learn gameplay.......... 
    <Link class="" to="/blogdetail"><b>Read More</b></Link>

    </p>
  </div>
</div>
</div>
            </div>
            <div className='col-md-4'>
            <div data-aos="flip-right">
              
            <div class="card blog-card mt-5" style={{width: "18rem;"}}>
  <img src="/Assects/images/blog-image-3.jpg" class="card-img-top blog-card-image" alt="..."/>
  <div class="card-body blog-card-body">
    <h4>Discovering</h4>
    <p class="card-text blog-card-text">
    Discovering new routes opens up fresh adventures, offering exciting paths and experiences along the way.......... 
    <Link class="" to="/blogdetail"><b>Read More</b></Link>

    </p>
  </div>
</div>

</div>
            </div>
        </div>
        <div className='row p-5'>
            <div className='col-md-4'>
            <div data-aos="flip-right">


            <div class="card blog-card mt-5" style={{width: "18rem;"}}>
  <img src="/Assects/images/blog-image-6.jpg" class="card-img-top blog-card-image" alt="..."/>
  <div class="card-body blog-card-body">
    <h4>Discover WildLife</h4>
    <p class="card-text blog-card-text">
    We provide essential support, ensuring a smooth and enjoyable experience for travelers on their journeys.......... 
    <Link class="" to="/blogdetail"><b>Read More</b></Link>

    </p>
  </div>
</div>
</div>
            </div>
            <div className='col-md-4'>
            <div data-aos="flip-down">

            <div class="card blog-card mt-5" style={{width: "18rem;"}}>
  <img src="/Assects/images/blog-image-4.jpg" class="card-img-top blog-card-image" alt="..."/>
  <div class="card-body blog-card-body">
    <h4>Glampse</h4>
    <p class="card-text blog-card-text">
    It's a great way for beginners to explore a classic adventure with improved graphics and easy-to-learn gameplay.......... 
    <Link class="" to="/blogdetail"><b>Read More</b></Link>

    </p>
  </div>
</div>
</div>
            </div>
            <div className='col-md-4'>
            <div data-aos="flip-right">

            <div class="card blog-card mt-5" style={{width: "18rem;"}}>
  <img src="/Assects/images/blog-image-5.jpg" class="card-img-top blog-card-image" alt="..."/>
  <div class="card-body blog-card-body">
    <h4>Forts History</h4>
    <p class="card-text blog-card-text">
    Discovering new routes opens up fresh adventures, offering exciting paths and experiences along the way.......... 
    <Link class="" to="/blogdetail"><b>Read More</b></Link>

    </p>
  </div>
</div>
</div>
            </div>
        </div>
        <div className='row p-5'>
            <div className='col-md-4'>
            <div data-aos="flip-right">

            <div class="card blog-card mt-5" style={{width: "18rem;"}}>
  <img src="/Assects/images/blog-image-8.jpg" class="card-img-top blog-card-image" alt="..."/>
  <div class="card-body blog-card-body">
    <h4>WaterFalls Adventure</h4>
    <p class="card-text blog-card-text">
    We provide essential support, ensuring a smooth and enjoyable experience for travelers on their journeys.......... 
    <Link class="" to="/blogdetail"><b>Read More</b></Link>

    </p>
  </div>
</div>
</div>
            </div>
            <div className='col-md-4'>
            <div data-aos="flip-up">

            <div class="card blog-card mt-5" style={{width: "18rem;"}}>
  <img src="/Assects/images/blog-image-7.jpg" class="card-img-top blog-card-image" alt="..."/>
  <div class="card-body blog-card-body">
    <h4>Peaks</h4>
    <p class="card-text blog-card-text">
    It's a great way for beginners to explore a classic adventure with improved graphics and easy-to-learn gameplay.......... 
    <Link class="" to="/blogdetail"><b>Read More</b></Link>

    </p>
  </div>
</div>
</div>
            </div>
            
        </div>
      </div>
      <Sponsers/>
      <Footer/>
    </>
  )
}

export default Blogs




// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [blogs, setBlogs] = useState([]);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newBlog = { title, content };

//     try {
//       const response = await fetch('http://localhost:5000/blogs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newBlog),
//       });

//       if (response.ok) {
//         setTitle('');
//         setContent('');
//         fetchBlogs(); // Fetch updated blogs after submission
//       }
//     } catch (error) {
//       console.error('Error submitting blog:', error);
//     }
//   };

//   // Fetch blogs from backend
//   const fetchBlogs = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/blogs');
//       const data = await response.json();
//       setBlogs(data);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     }
//   };

//   // Fetch blogs when component mounts
//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div>
//       <h1>Blog Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Content:</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Submit Blog</button>
//       </form>

//       <h2>Blogs</h2>
//       <ul>
//         {blogs.map((blog, index) => (
//           <li key={index}>
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

