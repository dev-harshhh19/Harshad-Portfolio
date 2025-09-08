import React from 'react';

const Profile = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-full w-48 h-48 object-cover"
      />
    </div>
  );
};

export default Profile;
