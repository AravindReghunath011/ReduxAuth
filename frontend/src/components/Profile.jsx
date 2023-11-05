import React from 'react';


const ProfileImage = ({ userInfo,adminInfo }) => {
    console.log('profile Image',userInfo.profileImage);
  return (
    <div className='h-10 w-10 rounded-lg'>
      <img className='w-full h-full rounded-3xl'
      src={`http://localhost:5000/images/${userInfo.profileImage||adminInfo.profileImage}`}
      alt=""
    />
    </div>
    
  );
};

export default ProfileImage;
