import React, { useState, useEffect, useRef } from 'react';
import '../styles/Main_EventBanner.css';

const BannerSlider = () => {
    const images = [
        require('../assets/img/banner/eventBanner1.png'),
        require('../assets/img/banner/eventBanner2.png'),
        require('../assets/img/banner/eventBanner3.png')
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef();

    // Add clones of the first and last images
    const extendedImages = [
        images[images.length - 1], // Last image added at the start
        ...images, // Original images
        images[0]  // First image added at the end
    ];

    const handlePrevClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
            setCurrentIndex(images.length);
        } else if (currentIndex === images.length + 1) {
            setCurrentIndex(1);
        }
    };

    useEffect(() => {
        sliderRef.current.addEventListener('transitionend', handleTransitionEnd);
        return () => {
            sliderRef.current.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [currentIndex]);

    return (
        <section className="mainPage_BannerSection">
            <div className="slider-container" style={{ marginLeft: (document.body.clientWidth - 1280) / 2 }}>
                <button className="slider-arrow left" onClick={handlePrevClick}>‹</button>
                <div className="slider-wrapper">
                    <div
                        className="slider"
                        ref={sliderRef}
                        style={{
                            transform: `translateX(-${currentIndex * (1280 + 80)}px)`,
                            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                        }}
                    >
                        {extendedImages.map((image, index) => (
                            <img
                                key={index}
                                className='mainPage_BannerImage'
                                src={image}
                                alt={`Banner ${index}`}
                                style={{ width: '1280px', marginRight: '80px' }}
                            />
                        ))}
                    </div>
                </div>
                <button className="slider-arrow right" onClick={handleNextClick}>›</button>
            </div>
            <div className="slider-indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index + 1 === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index + 1)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default BannerSlider;
