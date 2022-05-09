import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {planets.map((element) => (
          <PlanetCard
            key={ element.name }
            planetName={ element.name }
            planetImage={ element.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
