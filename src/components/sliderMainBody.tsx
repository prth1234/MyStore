import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@cred/neopop-web/lib/components";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '1800px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  innerContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  track: {
    display: 'flex',
    transition: 'transform 0.5s ease-out',
    height: '500px',
  },
  slide: {
    flex: '0 0 50%', // Each slide takes up 50% of the container width
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
  },
  prevButton: {
    left: '10px', // Positioned to the left
  },
  nextButton: {
    right: '10px', // Positioned to the right
  },
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const startXRef = useRef(null);
  const isDragging = useRef(false);

  const images = [
    "https://i.ibb.co/BH6tzMrj/274-2747072-amazing-picture-of-a-product-with-logo-with-removebg-preview.png",
    "https://i.ibb.co/BH6tzMrj/274-2747072-amazing-picture-of-a-product-with-logo-with-removebg-preview.png",
    "https://i.ibb.co/BH6tzMrj/274-2747072-amazing-picture-of-a-product-with-logo-with-removebg-preview.png",
    "https://i.ibb.co/BH6tzMrj/274-2747072-amazing-picture-of-a-product-with-logo-with-removebg-preview.png",
    "https://i.ibb.co/BH6tzMrj/274-2747072-amazing-picture-of-a-product-with-logo-with-removebg-preview.png",
    "https://i.ibb.co/BH6tzMrj/274-2747072-amazing-picture-of-a-product-with-logo-with-removebg-preview.png"
  ];

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDragStart = (e) => {
    isDragging.current = true;
    startXRef.current = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = startXRef.current - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < images.length - 1) {
        handleNext();
        isDragging.current = false;
      } else if (diff < 0 && currentIndex > 0) {
        handlePrev();
        isDragging.current = false;
      }
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener('touchstart', handleDragStart);
    track.addEventListener('touchmove', handleDragMove);
    track.addEventListener('touchend', handleDragEnd);
    track.addEventListener('mousedown', handleDragStart);
    track.addEventListener('mousemove', handleDragMove);
    track.addEventListener('mouseup', handleDragEnd);
    track.addEventListener('mouseleave', handleDragEnd);

    return () => {
      track.removeEventListener('touchstart', handleDragStart);
      track.removeEventListener('touchmove', handleDragMove);
      track.removeEventListener('touchend', handleDragEnd);
      track.removeEventListener('mousedown', handleDragStart);
      track.removeEventListener('mousemove', handleDragMove);
      track.removeEventListener('mouseup', handleDragEnd);
      track.removeEventListener('mouseleave', handleDragEnd);
    };
  }, [currentIndex]);

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div
          ref={trackRef}
          style={{
            ...styles.track,
            transform: `translateX(calc(-${currentIndex * 50}% + 25%))`, // Center the current slide
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={styles.slide}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      {currentIndex > 0 && (
        <div style={{ ...styles.button, ...styles.prevButton }}>
          <Button variant="primary" onClick={handlePrev}>
            <GrFormPrevious />
          </Button>
        </div>
      )}

      {currentIndex < images.length - 1 && (
        <div style={{ ...styles.button, ...styles.nextButton }}>
          <Button variant="primary" onClick={handleNext}>
            <MdNavigateNext />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;