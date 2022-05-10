import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title />
        <PlanetCard />
        <Missions />
      </>
    );
  }
}

export default App;
