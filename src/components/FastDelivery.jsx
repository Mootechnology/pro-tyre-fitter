
import React from 'react';
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const FastDelivery = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-center mb-4">
                        <i className="fas fa-user fa-3x mb-2"></i>
                        <h2>User Profile</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="col-md-6">
                    <Carousel interval={2000} pause={false}>
                        <Carousel.Item>
                            <img style={{ height: '40vh' }}
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '40vh' }}
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ height: '40vh' }}
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        </div>
    );
};

export default FastDelivery;
