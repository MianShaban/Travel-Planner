import React from 'react'

const ProfilePage = () => {
  return (
    <div>
       <div class="profile-container">
        <h1>User Profile</h1>

        <div class="profile-pic">
            <img id="profileImage" src="default-avatar.png" alt="Profile Picture"/>
            <input type="file" id="fileInput" accept="image/*"/>
        </div>

        <div class="profile-info">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name"/>

            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email"/>

            <button onclick="updateProfile()">Update Profile</button>
        </div>
    </div>

    </div>
  )
}



export default ProfilePage
