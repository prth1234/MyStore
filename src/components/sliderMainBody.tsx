import React, { useState, useEffect } from 'react';
import { Button } from "@cred/neopop-web/lib/components";

const styles = {
  carouselContainer: {
    position: 'relative',
    height: '700px',
    width: '100%',
    maxWidth: '1800px',
    margin: '0 auto',
    overflow: 'hidden',
    perspective: '1500px',
  },
  mainContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '0 120px',
  },
  carouselBelt: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselStage: {
    position: 'relative',
    width: '1400px',
    height: '600px',
  },
  slideContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '800px',
    height: '500px',
    transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '16px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
  },
  navigationButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 50,
  },
  prevButton: {
    left: '40px',
  },
  nextButton: {
    right: '40px',
  },
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Placeholder images - replace with your actual images
  const images = Array(6).fill("/api/placeholder/1200/800");

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [paused, images.length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.mainContainer}>
        <div style={styles.carouselBelt}>
          <div style={styles.carouselStage}>
            {images.map((image, index) => {
              // Calculate the rotation angle for each item
              const theta = (2 * Math.PI * (index - currentIndex)) / images.length;
              const rotation = (theta * 180) / Math.PI;
              
              // Calculate position and transform with wider spread
              const translateZ = -300;
              const translateX = Math.sin(theta) * 600;
              const translateY = -Math.cos(theta) * 150;
              
              const slideStyle = {
                ...styles.slideContainer,
                transform: `
                  translate(-50%, -50%)
                  translate3d(${translateX}px, ${translateY}px, ${translateZ}px)
                  rotateY(${rotation}deg)
                  scale(${Math.cos(theta) * 0.5 + 0.5})
                `,
                zIndex: Math.round(Math.cos(theta) * 100),
                opacity: Math.cos(theta) * 0.5 + 0.5,
              };

              return (
                <div
                  key={index}
                  style={slideStyle}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={styles.slideImage}
                    onClick={() => setPaused(!paused)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ ...styles.navigationButton, ...styles.prevButton }}>
          <Button variant="primary" showArrow onClick={prevSlide}>
            Previous
          </Button>
        </div>
        <div style={{ ...styles.navigationButton, ...styles.nextButton }}>
          <Button variant="primary" showArrow onClick={nextSlide}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;