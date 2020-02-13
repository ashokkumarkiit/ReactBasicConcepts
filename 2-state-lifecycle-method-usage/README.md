### Alternatives

## State Declaration
  Apart from constructor we can also define state as below :-

    state = { lat: null, errorMessage: '' };

  This is rendered similar to normal definition when compiled using Bable compiler.

##  Default Props -
  When Props are not passed, Default props are automatically set if defined in the page as below:-

    Spinner.defaultProps = {
      message: 'Loading...',
    };

## General Configuration for conditional Rendering.
  When we have to do conditional rendering, we can define a config based on the value like below and use ES6 syntax to fetch those values as shown below :-

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

    For Fetching :-
      const season = getSeason(props.lat,new Date().getMonth());
      const {text, iconName} = seasonConfig[season

## Lifecycle Methods for Component

    - constructor
    - render
        Content Made visible on screen
    - componentDidMount
        Loads API or Data when the component has been loaded
    - componentDidUpdate
        Wait until the components has been updated. A state change can trigger componentDidUpdate
    - componentWillUnmount
        Wait until the component is no longer shown and used for cleanups.
