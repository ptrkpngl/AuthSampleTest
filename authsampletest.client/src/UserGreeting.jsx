import React, { useState, useEffect } from 'react';

const UserGreeting = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        fetch('/.auth/me')
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    setUserName(data[0].user_id); // Replace 'user_id' with the correct claim for the user's name
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <p>
            {userName ? `Hello, ${userName}!` : 'You are not signed in.'}
        </p>
    );
};

export default UserGreeting;