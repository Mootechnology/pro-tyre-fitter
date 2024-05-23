import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { Helmet } from "react-helmet";

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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return (
    <div>
      <Helmet>
        <title id='meta-title'>Car Care Insights: Top Tips & Advice for Vehicle Owners</title>
        <meta
          name="description"
          id='meta-description'
          content="Explore our blog for expert car care tips, maintenance advice, and repair guides. Stay updated with the latest insights to keep your vehicle in top condition."
        />
        <meta name="robots" content="noindex, unfollow" />
      </Helmet>
      {/* Banner Section */}
      <header className='headerStyle'>
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
        <div className='para-width mx-auto'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis.</p></div>
     </div>
     
     <Container>
      <Row className="justify-content-center">
        <Col lg={6} className="image-container mt-3">
          <img src="images/img-11.jpg" alt="Image 1" className="img-fluid" />
          <div className="text-container">
            <h4>Heading Goes Here</h4>
            <p>Some kind of subheading</p>
            <Link to="/" className='btn btn-success'>Read More</Link>
          </div>
        </Col>
        <Col lg={6} className="image-container mt-3">
          <img src="images/img-11.jpg" alt="Image 2" className="img-fluid" />
          <div className="text-container">
            <h4>Another Heading Goes Here</h4>
            <p>Another kind of subheading</p>
            <Link to="/" className='btn btn-success'>Read More</Link>
          </div>
        </Col>
      </Row>
    </Container>

      {/* Main Content */}
      
      <div className='mt-4' style={{marginBottom: '-50px'}}>
        <Row className="text-center justify-content-center">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">Blogs</h2>
                </div>
            </div>
        </Row>
        <div className='para-width mx-auto text-center'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur quidem.</p></div>
     </div>

      <Container className="py-5">
        {posts.map(post => (
          <Row key={post.id} className="mt-4">
            <Col lg={6} className='d-flex justify-content-center'>
              <img src={post.imageUrl} alt={post.title} className="img-fluid mb-3 rounded" />
            </Col>
            <Col lg={6}>
              <div className='mt-3'>
                <h3 className='text-center'>{post.title}</h3>
                <p className='text-center'>{post.content.slice(0, 150)}...</p>
                <div className='d-flex justify-content-center'><Link to={`/blog/${post.id}`} className="btn btn-success">Read More</Link></div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}


export default BlogPage;