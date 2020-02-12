import React from 'react';
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async (term) => {
    // URL Used - https://unsplash.com/documentation#search-photos
    const response = await unsplash.get('/search/photos',{
      params: {
        query: term
      }
    });

    this.setState({
      images: response.data.results
    });
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
        />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
