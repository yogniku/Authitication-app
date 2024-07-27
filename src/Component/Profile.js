import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState(" ");
    const userId = localStorage.getItem('userId');

    return (
        <div>
            <h2>Profile</h2>
            <div>
                <strong>Username:</strong> {user.username}
            </div>
            <div>
                <strong>Email:</strong> {user.email}
            </div>
            <div>
                <strong>Full Name:</strong> {user.firstName} {user.lastName}
            </div>
            <div>
                <strong>Gender:</strong> {user.gender}
            </div>
            <div>
                <strong>Phone:</strong> {user.phone}
            </div>
           
        </div>
    );
};

export default Profile;
