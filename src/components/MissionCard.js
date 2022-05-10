import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="cars-missions">
        <p data-testid="mission-name" className="card">
          {name}
        </p>
        <p data-testid="mission-year" className="card">
          {year}
        </p>
        <p data-testid="mission-country" className="card">
          {country}
        </p>
        <p data-testid="mission-destination" className="card">
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
