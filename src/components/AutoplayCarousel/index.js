import React from 'react';
import './index.css'; // Ensure you create this CSS file for styling

const AutoplayCarousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide mt-5" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="/3.jpg"
                        className="d-block w-100"
                        alt="yellow-car"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="/4.jpg"
                        className="d-block w-100"
                        alt="brown-car"
                    />
                </div>
            </div>
        </div>
    );
};

export default AutoplayCarousel;