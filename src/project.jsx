/**
 * File: Project.js
 * Student Name: John Pablo Berber
 * Student ID: 301337112
 * Date: 01/28/2025
 * Description: This component showcases personal projects, including descriptions and images.
 */

import React from 'react';

const Project = () => {
    return (
        <div>
            {/* Header Section */}
            <h1>My Projects</h1>

            {/* Project 1: Cleric and Necromancer */}
            <div>
                <h2>Cleric and Necromancer</h2>
                <img src="/graveyard.png" alt="Cleric and Necromancer" style={{ width: '300px' }} />
                <p>Description: Cleric and Necromancer is a game I am currently working on as a school project. I am a co-developer alongside Gabriel Nogueira.<br/> It is a top down shooter game where you are a mage shooting skeletons.</p>
                <br/>
            </div>

            {/* Project 2: Ninja Platforming Game */}
            <div>
                <h2>Ninja Platforming Game</h2>
                <img src="/ninja.png" alt="Ninja Platforming Game" style={{ width: '300px' }} />
                <p>Description: This was a solo project from my first year of studies after my teammates left the group. This game was never finished due to time constraints.</p>
                <br/>
            </div>

            {/* Project 3: 3D Unity Pong Game */}
            <div>
                <h2>3D Unity Pong Game</h2>
                <img src="/pong.png" alt="3D Unity Pong" style={{ width: '300px' }} />
                <p>Description: This was my first project developed in Unity. It was a basic pong game meant to teach the basics of Unity.</p><br/>
            </div>
        </div>
    );
};

export default Project;