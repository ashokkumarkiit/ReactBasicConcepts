import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
  render() {
    const {song} = this.props;
    return(
      <div>
        {song !== null?
          <div>
            <h3>Details for:</h3>
            <p>
              Title: {song.title}
              <br />
              Duration: {song.duration}
            </p>
          </div>
        :
        <div>
          Select a Song
        </div>
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      song: state.selectedSong
  }
};

export default connect(mapStateToProps)(SongDetail);
