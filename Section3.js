import React, { useState, useEffect } from "react";

const Section3 = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [trips, setTrips] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  // Function to animate the counters
  const animateCounter = (setCounter, target, duration) => {
    let start = 0;
    const increment = target / duration; // Define increment per millisecond

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCounter(target); // Ensure final value is the target
      } else {
        setCounter(Math.floor(start)); // Update the counter state
      }
    }, 1); // Update every millisecond
  };

  useEffect(() => {
    // Animate each counter when the component mounts
    animateCounter(setHappyClients, 100, 2000); // Happy Clients - 100 in 2 seconds
    animateCounter(setTrips, 1500, 2000); // Trips - 1500 in 2 seconds
    animateCounter(setSatisfaction, 100, 2000); // Satisfaction - 100% in 2 seconds
  }, []);

  return (
    <div>
      <div className="back-container">
        {/* <img
          className="backimg-se3"
          src="/Assects/images/cave-se3.jpg"
          alt="Background"
        /> */}
        <div className="container-fluid se3-container mt-0 ">
          <div className="row img-row-se3 p-5 ">
            <div className="col-md-12  counter-se3">
              <ul className="counter-ul w-100  text-center">
                <li className="counter-list ml-5">
                  <h1 id="counter">{happyClients} + Happy Clients</h1>
                </li>
                <li className="counter-list ml-5">
                  <h1 id="counter1">{trips} + Trips</h1>
                </li>
                <li className="counter-list ml-5">
                  <h1 id="counter2">{satisfaction} % Satisfaction</h1>
                </li>
              </ul>
              {/* <div className="counter-container"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
