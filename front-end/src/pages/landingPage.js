import React, { Component } from 'react';
import '../App.css';
import './landingPage.css';
import Button from '@mui/material-next/Button';

export default function landingPage() {
    return (
        <div className="container">
            <nav className="navBar"></nav>
            <div className="center">
                <Button variant="habit" onclick="" sx={{height: 50, width: 761}}></Button>
                <p></p>
                {/* TODO: make functionality that creates a button when we add a habit */}
            </div>
        </div>
        
    )
}
