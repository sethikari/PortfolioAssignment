/**
 * File: Services.js
 * Student Name: John Pablo Berber
 * Student ID: 301337112
 * Date: 01/28/2025
 * Description: This component lists the services offered, including scripting and game development.
 */

import React from 'react';

const Services = () => {
    return (
        <div>
            {/* Header Section */}
            <h1>My Services</h1>
            <br/>

            {/* List of Services */}
            <ul>
                {/* Service 1: Scripting */}
                <li>
                    <strong>Scripting:</strong>
                    <p>I offer scripting services for C# and Java-related projects.</p>
                    <br/>
                </li>

                {/* Service 2: Game Development */}
                <li>
                    <strong>Game Development:</strong>
                    <p>I offer game development services for Unity 2D and 3D games.</p>
                </li>
            </ul>
        </div>
    );
};

export default Services;