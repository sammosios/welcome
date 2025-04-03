import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {

    const [displayText, setDisplayText] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayText((prevText) => {
                const nextChar = text[prevText.length];
                if (nextChar !== undefined) {
                    return prevText + nextChar;
                } else {
                    clearInterval(interval);
                    return prevText;
                }
            });
        }, 50); // Adjust the delay as needed 

        return () => clearInterval(interval);
    }, [text]);

    return <p>{displayText}</p>;
};

export default Typewriter;

