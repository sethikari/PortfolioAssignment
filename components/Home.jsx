/**
 * File: Home.js
 * Student Name: John Pablo Berber
 * Student ID: 301337112
 * Date: 01/28/2025
 * Description: This component renders the homepage of the portfolio website, 
 * welcoming users and providing a button to navigate to the About page.
 */

import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Header Section */}
            <h1>Welcome to My Portfolio</h1>
            <br/>

            {/* Introductory Paragraph */}
            <p>This is the home page of my personal portfolio website. Feel free to explore!</p>
            <br/>

            {/* Navigation Button to About Page */}
            <button onClick={() => window.location.href='/about'}>Learn More About Me</button>
        </div>
    );
};

export default Home;
    