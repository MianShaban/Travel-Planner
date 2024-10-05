import React, { useState, useEffect } from 'react';
import axios from 'axios'; // for making API requests

const Profile = () => {
  // State to store profile data
  const [profileData, setProfileData] = useState({
    username: '',
    birthday: '',
    gender: '',
    phone: '',
    profileImage: ''
  });
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image file

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:5000'); // Replace with your backend URL
        setProfileData(response.data); // Set profile data from the response
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, []);

  // Handle input change for form fields
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  // Handle form submission to update profile data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // First, upload the image if a new one is selected
      let uploadedImageUrl = profileData.profileImage; // Keep existing image if no new image is selected
      if (selectedImage) {
        const formData = new FormData();
        formData.append('profileImage', selectedImage);
        
        const uploadResponse = await axios.post('http://localhost:5000', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        uploadedImageUrl = uploadResponse.data.imageUrl; // Get uploaded image URL from the response
      }

      // Now, update the profile information
      const updatedProfile = { ...profileData, profileImage: uploadedImageUrl };
      const response = await axios.put('http://localhost:5000', updatedProfile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  return (
    <div>
      <div id="profile1" className="container">
        <h1>Edit Profile</h1>
        <hr />
        <div className="row">
          {/* Left column: Image upload */}
          <div className="col-md-3">
            <div className="text-center">
              <img
                src={profileData.profileImage || "/Assets/images/default-avatar.png"}
                className="avatar img-circle"
                alt="avatar"
                width="150"
                height="150"
              />
              <input type="file" className="form-control p-1 mt-2" onChange={handleImageChange} />
            </div>
          </div>

          {/* Right column: Profile form */}
          <div className="col-md-9 personal-info">
            <div className="alert alert-info alert-dismissable">
              <i className="fa fa-coffee"></i>
              This is an <strong>alert</strong>. Be careful while editing.
            </div>
            <h3>Personal info</h3>

            <form className="form-horizontal" role="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="col-md-3 control-label">Username:</label>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={profileData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-lg-3 control-label">Date of Birth:</label>
                <div className="col-lg-8">
                  <input
                    type="date"
                    name="birthday"
                    className="form-control"
                    value={profileData.birthday}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">Gender:</label>
                <div className="col-md-8">
                  <select
                    name="gender"
                    className="form-control"
                    value={profileData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label">Mobile Number:</label>
                <div className="col-md-8">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="+92-123-4567890"
                    value={profileData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-8">
                  <button type="submit" className="btn btn-primary w-50">Save Changes</button>
                  <input type="reset" className="btn btn-secondary ml-5" value="Cancel" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Profile;
