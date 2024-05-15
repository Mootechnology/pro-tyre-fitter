import React from 'react';
import Button from 'react-bootstrap/Button';

const SectionWithBanners = () => {


    return (
        <div>
            {/* Section 5 */}
            <section className="container" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                {/* Single Row */}
                <div className="row about-row text-center">
                    <div className="col-md-6 dual-banner-imageOne text-light p-4 font-monospace" style={{ height: '20rem' }}>
                        <h4 className='mt-5'><strong>Best Deal on Top</strong>
                        <br />
                        <span>Sellers</span></h4>
                        <h4 className="text-white">
                            GET 30% OFF
                        </h4>
                        <Button variant="success mt-3 px-4">Shop Now</Button>
                    </div>

                    <div className="col-md-6 dual-banner-imageTwo text-light p-4 font-monospace" style={{ height: '20rem' }}>
                        <h4 className='mt-5'><strong>Auto Car</strong>
                        <br />
                        <span>Repair</span></h4>
                        <h4 className="text-white">
                            GET 30% OFF
                        </h4>
                        <Button variant="success mt-3 px-4">Shop Now</Button>
                    </div>                
                    </div>
            </section>
        </div>

    );
};

export default SectionWithBanners;
