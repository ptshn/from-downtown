import React, { Component } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import TeamForm from './components/TeamForm'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
        <TeamForm />
      </div>
    );
  }
}

export default App
