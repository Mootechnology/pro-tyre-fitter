import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { Helmet } from "react-helmet";
import { useCanonical } from "./canonical";

const blogPosts = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'images/img-11.jpg',
  },
  {
    id: 2,
    title: 'Consectetur Adipisicing Elit',
    content: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imageUrl: 'images/img-11.jpg',
  },
  {
    id: 3,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'images/img-11.jpg',
  },
  {
    id: 4,
    title: 'Consectetur Adipisicing Elit',
    content: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imageUrl: 'images/img-11.jpg',
  },
  {
    id: 5,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'images/img-11.jpg',
  },
];

function BlogPage() {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/blogs");
  }, [setCanonicalUrl]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return (
    <div>
      <Helmet>
        <title id='meta-title'>Car Care Insights: Top Tips & Advice for Vehicle Owners</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/blogs" />
        <meta name="description" id='meta-description' content="Explore our blog for expert car care tips, maintenance advice, and repair guides. Stay updated with the latest insights to keep your vehicle in top condition."/>
        <meta name="robots" content="noindex, unfollow" />
      </Helmet>
      {/* Banner Section */}
      <header className='headerStyle blog_banner'>
        <h1>Blogs</h1>
        <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | Blogs</h5>
      </header>

      <div className='mt-4'>
        <Row className="text-center justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">Popular Blogs</h2>
                </div>
            </div>
        </Row>
        <div className='para-width mx-auto'><p className='text-center'>Read the informative, technical and most usful blogs with all the information you need abot tyre fitting.</p></div>
     </div>
     
     <Container className='mb-3'>
      <Row className="justify-content-center">
        <Col md={6} className="image-container mt-3">
          <img src="images/img-11.png" alt="Image 1" className="img-fluid rounded" />
          <div className="text-container">
            <h2>Tips for Choosing the Right Mobile Tyre Fitting Service</h2>
            <p style={{width: '90%', textAlign: 'justify'}}>Are you fed up with your tyre problems and looking for a solution to ease your worries? Tyre-related problems disrupt travel routines and affect work, causing unexpected stress and incidents. It can occur for many reasons, like lack of maintenance, extreme weather, and bad road conditions, but finding the solution is another task for a person. Pro Tyre Fitters is a platform that deals with all tyre-related problems and provides the best quick solutions. Our professionals are ready  24/7 to deal with the emergency. Here are some tips to help you choose the right mobile tyre fitting service for your vehicle.</p>
            <Link to="/blogs/tips-tor-choosing-the-right-mobile-tyre-fitting-service" className='btn btn-success'>Read More</Link>
          </div>
        </Col>
        {/* <Col md={6} className="image-container mt-3">
          <img src="images/img-11.jpg" alt="Image 2" className="img-fluid" />
          <div className="text-container">
            <h2>Another Heading Goes Here</h2>
            <p style={{width: '90%', textAlign: 'justify'}}>Another kind of subheading</p>
            <Link to="/" className='btn btn-success'>Read More</Link>
          </div>
        </Col> */}
      </Row>
    </Container>

      {/* Main Content */}
      
      {/* <div className='mt-4' style={{marginBottom: '-50px'}}>
        <Row className="text-center justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">Blogs</h2>
                </div>
            </div>
        </Row>
        <div className='para-width mx-auto text-center'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur quidem.</p></div>
     </div> */}

      {/* <Container className="py-5">
        {posts.map(post => (
          <Row key={post.id} className="mt-4">
            <Col md={6} className='d-flex justify-content-center'>
              <img src={post.imageUrl} alt={post.title} className="img-fluid mb-3 rounded" />
            </Col>
            <Col md={6}>
              <div className='mt-3'>
                <h3 className='text-center'>{post.title}</h3>
                <p className='text-center'>{post.content.slice(0, 150)}...</p>
                <div className='d-flex justify-content-center'><Link to={`/blog/${post.id}`} className="btn btn-success">Read More</Link></div>
              </div>
            </Col>
          </Row>
        ))}
      </Container> */}
    </div>
  );
}


export default BlogPage;