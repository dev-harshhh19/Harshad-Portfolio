import React from 'react';

const Profile = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-full w-50 h-50 object-cover"
      />
    </div>
  );
};

export default Profile;
