/**
 * File: About.js
 * Student Name: John Pablo Berber
 * Student ID: 301337112
 * Date: 01/28/2025
 * Description: This component displays the About Me section, including 
 * a brief introduction, a profile picture, and a link to the resume.
 */

import React from 'react';

const About = () => {
    return (
        <div>
            {/* Header Section */}
            <h1>About Me</h1>

            {/* Profile Picture */}
            <img src="/20250127_100432.jpg" alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
            <br/>

            {/* Bio Description */}
            <p>Hello! My name is John Pablo Berber. I am currently a Game Programming Student studying at Centennial College. Welcome to my portfolio website!</p>
            <br/>

            {/* Resume Download Link */}
            <a href="/resume.docx.pdf" target="_blank" rel="noopener noreferrer">View My Resume</a>
        </div>
    );
};

export default About;
    