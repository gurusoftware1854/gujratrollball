import React, { useEffect } from 'react';

const Highlights = () => {
  useEffect(() => {
    // Function to animate counters
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const updateCounter = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const increment = target / 200; // Adjust this value to control the speed of the animation

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 1); // Adjust this value to control the smoothness of the animation
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
      });
    };

    // Trigger counter animation when component mounts
    animateCounters();
  }, []);

  return (
    <div className="feature-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div className="title white text-center">
              <span>Our Highlights</span>
              <h2>Discover the Excitement at Gujarat Roll Ball Association</h2>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="single-feature">
                <div className="icon">
                  <i><img src="/assets/img/icons/feature-icon-1.png" alt="Teams" /></i>
                </div>
                <span className="counter" data-target="12">0</span><br /> <b>Teams</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="single-feature">
                <div className="icon">
                  <i><img src="/assets/img/icons/feature-icon-2.png" alt="Tournaments" /></i>
                </div>
                <span className="counter" data-target="15">0</span> <br /><b>Tournaments</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="single-feature">
                <div className="icon">
                  <i><img src="/assets/img/icons/feature-icon-3.png" alt="Training Sessions" /></i>
                </div>
                <span className="counter" data-target="100">0</span> <br /><b>Training Sessions</b>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="single-feature">
                <div className="icon">
                  <i><img src="/assets/img/icons/feature-icon-4.png" alt="Members" /></i>
                </div>
                <span className="counter" data-target="250">0</span> <br /> <b>Members</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Highlights