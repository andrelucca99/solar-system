import React from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((element) => (
          <MissionCard
            key={ element.name }
            name={ element.name }
            year={ element.year }
            countr={ element.country }
            destination={ element.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
