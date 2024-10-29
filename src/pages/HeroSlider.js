import { useEffect } from 'react';
import Swiper from 'swiper/bundle'; // Ensure Swiper is imported correctly

const HeroSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.hero-slider', {
      slidesPerView: 1,
      spaceBetween: 0, // No space between slides
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" style="border: 2px solid #000; border-radius: 50%; width: 12px; height: 12px; display: inline-block; background: #fff;"></span>`;
        },
      },
      autoplay: {
        delay: 40000, // Change slides every 4 seconds
        disableOnInteraction: false, // Continue autoplay after user interactions
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'fade', // Use fade effect for smoother transitions
      fadeEffect: {
        crossFade: true, // Enable crossfade effect
      },
      speed: 800, // Adjust speed for a smoother transition
    });

    // Cleanup function
    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="hero-area" style={{ position: 'relative' }}>
      <div className="swiper hero-slider" style={{ position: 'relative' }}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="hero-single slide1">
              <div className="container">
                <div className="hero-wrapper">
                  <div className="hero-content">
                    {/* <h2 style={{ color: '#fff', textAlign: 'center' }}>Where Champions Are Made</h2>
                    <p style={{ color: '#fff', textAlign: 'center' }}>Participate in our competitive events and tournaments, designed to showcase talent and foster sportsmanship.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="swiper-slide">
            <div className="hero-single slide2">
              <div className="container">
                <div className="hero-wrapper">
                  <div className="hero-content">
                    <h2 style={{ color: '#fff', textAlign: 'center' }}>Rolling Forward with Passion</h2>
                    <p style={{ color: '#fff', textAlign: 'center' }}>Dedicated to promoting and advancing the exciting sport of roll ball in Gujarat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="swiper-slide">
            <div className="hero-single slide3">
              <div className="container">
                <div className="hero-wrapper">
                  <div className="hero-content">
                    {/* <h2 style={{ color: '#fff', textAlign: 'center' }}>Ignite Your Spirit, Master the Game</h2>
                    <p style={{ color: '#fff', textAlign: 'center' }}>Programs designed to enhance skills, encourage teamwork, and ignite passion for the game.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add navigation buttons */}
        <div className="swiper-button-next" style={{ color: '#fff', fontSize: '20px', right: '50px', top: '50%', transform: 'translateY(-50%)' }}></div>
        <div className="swiper-button-prev" style={{ color: '#fff', fontSize: '20px', left: '50px', top: '50%', transform: 'translateY(-50%)' }}></div>
        {/* Pagination */}
        {/* <div className="swiper-pagination" style={{ bottom: '10px' }}></div> */}
      </div>
    </div>
  );
};

export default HeroSlider;
