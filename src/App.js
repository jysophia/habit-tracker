import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { CssBaseline } from '@mui/material';
import LandingPage from './pages/landingPage';
import UserProfile from './pages/userProfile';
import HabitStart from './pages/habitStart';
import HabitSet from './pages/habitSet';
import HabitProgress from './pages/habitProgress';
import HabitList from './pages/habitList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <CssBaseline />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/userProfile" element={<UserProfile />}></Route>
                <Route path="/habitStart" element={<HabitStart />}></Route>
                <Route path="/habitSet" element={<HabitSet />}></Route>
                <Route path="/habitProgress" element={<HabitProgress />}></Route>
                <Route path="/habitList" element={<HabitList />}></Route>
              </Routes>
            </BrowserRouter>
        </React.Fragment>
        
      </header>
    </div>
  );
}

export default App;
