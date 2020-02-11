import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: null,
      errFlag: false,
      errorMsg: null,
    }
  }

  // Different way to define state
  //state = { lat: null, errorMessage: '' };

    render() {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({
            lat: position.coords.latitude,
            errFlag: false,
          })
        },
        (error) => {
          console.log(error);
          this.setState({
            errFlag: true,
            errorMsg: error.message,
          })
        }
      );
      return (
        <div>
          {!this.state.errFlag ?
              <div></div>
            :
            <div>Error : {this.state.errorMsg}</div>
          }
          {this.state.lat === null ?
              <div>
                <Spinner message='Please accept location request.'/>
              </div>
            :
              <div>
                <SeasonDisplay
                  lat={this.state.lat}
                />
              </div>
          }
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.querySelector('#root'));
