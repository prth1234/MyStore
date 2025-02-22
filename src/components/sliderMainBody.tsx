import React, { useState, useRef, useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '1800px',
    margin: '0 auto',
    minHeight: '800px', // Increased to accommodate all content
    paddingBottom: '150px', // Space for fixed button
  },
  innerContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  track: {
    display: 'flex',
    transition: 'transform 0.5s ease-out',
    height: '400px',
    alignItems: 'center',
  },
  slide: {
    flex: '0 0 50%',
    height: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    transformOrigin: 'bottom center',
    padding: '20px',
  },
  imageContainer: {
    height: '350px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  descriptionContainer: {
    position: 'absolute',
    width: '100%',
    top: '500px', // Position below the slider
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'white',
    zIndex: 20,
  },
  productName: {
    fontFamily: 'NeoPop-Regular',
    fontSize: '28px',
    marginBottom: '16px',
    color: '#000',
  },
  productDescription: {
    fontFamily: 'NeoPop-Light',
    fontSize: '18px',
    marginBottom: '12px',
    color: '#333',
    maxWidth: '600px',
    textAlign: 'center',
  },
  features: {
    fontFamily: 'NeoPop-Medium',
    fontSize: '16px',
    color: '#666',
    marginBottom: '16px',
    maxWidth: '600px',
    textAlign: 'center',
  },
  priceContainer: {
    position: 'fixed',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
  },
  unlockButton: {
    fontFamily: 'NeoPop-Medium',
    padding: '15px 30px',
    fontSize: '18px',
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  priceReveal: {
    fontFamily: 'NeoPop-Regular',
    fontSize: '28px',
    color: '#000',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.5s ease',
  },
  priceRevealVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  navigationButton: {
    position: 'absolute',
    top: '200px', // Adjusted to center with images
    zIndex: 10,
    background: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid #ccc',
  },
  prevButton: {
    left: '10px',
  },
  nextButton: {
    right: '10px',
  },
};

// ... (keep the same products array and component logic as before)

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrice, setShowPrice] = useState(false);
  const trackRef = useRef(null);
  const startXRef = useRef(null);
  const isDragging = useRef(false);

  const products = [
    {
      image: "https://i.ibb.co/BH6tzMrj/274-2747072-amazing-picture-of-a-product-with-logo-with-removebg-preview.png",
      name: "Premium Smartwatch",
      description: "Advanced fitness tracking with heart rate monitoring",
      features: "Water resistant • 5-day battery life • Sleep tracking",
      price: "$299.99"
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png",
      name: "Wireless Headphones",
      description: "Immersive sound with active noise cancellation",
      features: "40h battery • Quick charge • Bluetooth 5.0",
      price: "$199.99"
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/05/17/14/50/ai-generated-8768467_640.png",
      name: "Smart Speaker",
      description: "360° room-filling sound with voice control",
      features: "Multi-room audio • Voice assistant • WiFi + Bluetooth",
      price: "$149.99"
    },
    {
      image: "https://png.pngtree.com/png-vector/20231107/ourmid/pngtree-folded-clothes-isolated-on-white-clothing-png-image_10419972.png",
      name: "Premium Apparel",
      description: "Sustainable and comfortable everyday wear",
      features: "100% organic • Eco-friendly • Machine washable",
      price: "$79.99"
    },
    {
      image: "https://file.aiquickdraw.com/imgcompressed/img/compressed_2ccfc013f2a5e998efc28ad8fe69574f.webp",
      name: "Designer Backpack",
      description: "Stylish and functional for work and travel",
      features: "Water-resistant • Laptop sleeve • Anti-theft",
      price: "$129.99"
    },
    {
      image: "https://png.pngtree.com/png-clipart/20230206/ourmid/pngtree-cell-phone-mockup-png-image_6584021.png",
      name: "Flagship Smartphone",
      description: "Revolutionary camera system with AI capabilities",
      features: "5G • All-day battery • Pro camera system",
      price: "$999.99"
    }
  ];

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowPrice(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowPrice(false);
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
      if (diff > 0 && currentIndex < products.length - 1) {
        handleNext();
      } else if (diff < 0 && currentIndex > 0) {
        handlePrev();
      }
      isDragging.current = false;
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  const togglePrice = () => {
    setShowPrice(!showPrice);
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
          <div style={styles.headingContainer}>
               <a href="" target="_blank" rel="noopener noreferrer"  style={styles.headingImage}>
                   <img 
                       src="https://i.ibb.co/0jTfqy8L/image-Photoroom.png" 
                       alt="Image Title Here" 
                       width="200" 
                       style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }} // Centering styles added here
                   />
               </a>
           </div>
        <div style={styles.innerContainer}>
          <div
              ref={trackRef}
              style={{
                ...styles.track,
                transform: `translateX(calc(-${currentIndex * 50}% + 25%))`,
              }}
          >
            {products.map((product, index) => (
                <div
                    key={index}
                    style={{
                      ...styles.slide,
                      transform: `rotateY(${
                          index === currentIndex ? 0 : index < currentIndex ? -30 : 30
                      }deg) scale(${
                          index === currentIndex ? 1 : 0.8
                      })`,
                      opacity: index === currentIndex ? 1 : 0.7,
                    }}
                >
                  <div style={styles.imageContainer}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={styles.image}
                    />
                  </div>
                </div>
            ))}
          </div>
        </div>

        <div style={styles.descriptionContainer}>
          <div style={styles.productName}>{products[currentIndex].name}</div>
          <div style={styles.productDescription}>{products[currentIndex].description}</div>
          <div style={styles.features}>{products[currentIndex].features}</div>
        </div>

        <div style={styles.priceContainer}>
          <div
              style={{
                ...styles.priceReveal,
                ...(showPrice ? styles.priceRevealVisible : {})
              }}
          >
            {products[currentIndex].price}
          </div>
          <button
              style={styles.unlockButton}
              onClick={togglePrice}
          >
            {showPrice ? 'Hide Price' : 'Unlock Price'}
          </button>
        </div>

        {currentIndex > 0 && (
            <div style={{ ...styles.navigationButton, ...styles.prevButton }} onClick={handlePrev}>
              <GrFormPrevious />
            </div>
        )}

        {currentIndex < products.length - 1 && (
            <div style={{ ...styles.navigationButton, ...styles.nextButton }} onClick={handleNext}>
              <MdNavigateNext />
            </div>
        )}
      </div>
    );
};

export default ImageSlider;