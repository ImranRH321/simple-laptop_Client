import React, { useState } from 'react';
import MyProfile from './MyProfile';

const MyProfileParent = () => {
    const [upload, setUpload] = useState('')
  console.log(upload);
    return (
        <div>
            <h3>Profile Parent </h3>
            <MyProfile setUpload={setUpload}></MyProfile>
        </div>
    );
};

export default MyProfileParent;