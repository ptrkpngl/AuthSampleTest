import React, { useState, useEffect } from 'react';

const SignInOutButton = () => {
    const [userIsSignedIn, setUserIsSignedIn] = useState(false);

    useEffect(() => {
        fetch('/.auth/me')
            .then(response => response.json())
            .then(data => {
                setUserIsSignedIn(data && data.length > 0);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const handleButtonClick = () => {
        if (userIsSignedIn) {
            // Sign out
            window.location.href = '/.auth/logout';
        } else {
            // Sign in
            window.location.href = '/.auth/login/aad';
        }
    };

    return (
        <button onClick={handleButtonClick}>
            {userIsSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
    );
};

export default SignInOutButton;
