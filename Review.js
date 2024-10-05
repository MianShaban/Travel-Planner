import React, { useState, useEffect } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  const [map, setMap] = useState(null);  // Store the Leaflet map instance
  const [markerLayer, setMarkerLayer] = useState(null);  // Store the marker layer
  const [boundaryLayer, setBoundaryLayer] = useState(null);  // Store the boundary layer
  const [reviews, setReviews] = useState([]);  // Store reviews and locations

  // Initialize the Leaflet map
  useEffect(() => {
    const initMap = () => {
      const newMap = L.map('map').setView([30.3753, 69.3451], 6);  // Set initial view to Pakistan
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(newMap);
      setMap(newMap);  // Save the map instance
    };
    initMap();
  }, []);

  // Function to fetch and highlight the area using the Nominatim API
  const highlightArea = (locationName, reviewText) => {
    // Clear previous marker and boundary if they exist
    if (markerLayer) {
      map.removeLayer(markerLayer);
    }
    if (boundaryLayer) {
      map.removeLayer(boundaryLayer);
    }

    // Nominatim Geocoding API URL for searching cities/areas
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${locationName},Pakistan&limit=1`;

    // Fetch location data from Nominatim API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const location = data[0];
          const lat = location.lat;
          const lon = location.lon;

          // Add a marker at the location and center the map
          const newMarkerLayer = L.marker([lat, lon]).addTo(map)
            .bindPopup(`Location: ${location.display_name}`)
            .openPopup();
          setMarkerLayer(newMarkerLayer);

          map.setView([lat, lon], 12);  // Zoom into the found location

          // Get the bounding box for the location (approximate boundaries)
          const boundingBox = location.boundingbox;
          const southWest = L.latLng(boundingBox[0], boundingBox[2]);
          const northEast = L.latLng(boundingBox[1], boundingBox[3]);
          const bounds = L.latLngBounds(southWest, northEast);

          // Draw a rectangle (highlight the bounding box in green)
          const newBoundaryLayer = L.rectangle(bounds, { color: 'green', weight: 2 }).addTo(map);
          setBoundaryLayer(newBoundaryLayer);
          map.fitBounds(bounds);  // Zoom to fit the highlighted area

          // Add the review to the list of posted reviews
          addReview(location.display_name, reviewText, lat, lon, bounds);
        } else {
          alert('Location not found. Please enter a valid city or area in Pakistan.');
        }
      })
      .catch(error => {
        alert('Error fetching data from Nominatim API. Please try again.');
      });
  };

  // Function to add a review to the posted reviews list
  const addReview = (locationName, reviewText, lat, lon, bounds) => {
    const reviewId = reviews.length;
    const newReview = { locationName, reviewText, lat, lon, bounds };
    setReviews([...reviews, newReview]);  // Add the new review to the state

    // No need to manage list rendering manually, React handles it via JSX
  };

  // Event handler for the "Post Review and Highlight Location" button
  const handleSubmit = () => {
    const locationName = document.getElementById('location-input').value;
    const reviewText = document.getElementById('review-text').value;

    if (locationName.trim() !== '' && reviewText.trim() !== '') {
      highlightArea(locationName, reviewText);  // Highlight location and post the review
    } else {
      alert('Please enter both a location and a review.');
    }
  };

  // Function to focus on the location of a review when clicked
  const handleReviewClick = (review) => {
    if (markerLayer) {
      map.removeLayer(markerLayer);
    }
    if (boundaryLayer) {
      map.removeLayer(boundaryLayer);
    }

    // Highlight the stored location and boundary for the review
    const newMarkerLayer = L.marker([review.lat, review.lon]).addTo(map)
      .bindPopup(`Location: ${review.locationName}`)
      .openPopup();
    setMarkerLayer(newMarkerLayer);

    const newBoundaryLayer = L.rectangle(review.bounds, { color: 'green', weight: 2 }).addTo(map);
    setBoundaryLayer(newBoundaryLayer);
    map.fitBounds(review.bounds);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6 p-5 ">
            <h3>Write a Review for a City/Area in <span style={{borderRadius:"9px", backgroundColor:"lightgreen", padding:".5px"}}>Pakistan</span> which you visited</h3>
          <p class="card-text">Enter the name of a city or area in Pakistan and leave a review. The location will be highlighted on the map.</p>
           
            <input id="location-input" type="text" placeholder="Enter location" className="form-control mb-2" />
            <textarea id="review-text" placeholder="Enter review" className="form-control mb-2" rows="3"></textarea>
            <button id="submit-btn" className="btn btn-primary" onClick={handleSubmit}>Post Review and Highlight Location</button>
          </div>
          <div className='col-md-6'>
 {/* Map container */}
 <div id="map" style={{ height: '500px', width: '100%' }}></div>
          </div>
          
              
        </div>
        <div class="row p-2">
        <div className="col-md-12 border review-side-column">
        <h2>Reviews</h2>
        <p className='text-center'>click the Review to highlight Area of the Area </p>

            <ul id="review-list" className="list-group">
              {reviews.map((review, index) => (
                <li key={index} className="list-group-item mb-3 border" onClick={() => handleReviewClick(review)}>
                  {review.locationName}: {review.reviewText}
                </li>
              ))}
            </ul>
          </div>
          
  </div>
      </div>
    </div>
  );
};

export default MapComponent;
