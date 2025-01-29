/**
 * File: Layout.js
 * Student Name: John Pablo Berber
 * Student ID: 301337112
 * Date: 01/28/2025
 * Description: This file contains the layout structure, including the navigation bar 
 * and logo display.
 */

import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      {/* Portfolio Title */}
      <h1>My Portfolio</h1>

      {/* Navigation Bar */}
      <nav>
        <img src="/logo.jpg" alt="Logo" className="logo" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/services">Services</Link> | 
        <Link to="/project">Project</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Horizontal Line for Separation */}
      <br />
      <hr />
    </>
  )
}