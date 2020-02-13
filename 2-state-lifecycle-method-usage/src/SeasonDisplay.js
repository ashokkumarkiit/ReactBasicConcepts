import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'It\'s Summer Now!!!!',
    iconName: 'sun'
  },
  winter: {
    text: 'It\'s Winter Now!!!!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat,month) => {
  if(month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    }
    else {
      return lat < 0 ? 'winter' : 'summer';
    }
  };

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat,new Date().getMonth());
  const {text, iconName} = seasonConfig[season];
  return(
    <div>
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <div>{text}</div>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    </div>
  );
}

export default SeasonDisplay;
