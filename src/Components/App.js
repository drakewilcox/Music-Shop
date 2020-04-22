import React from 'react';
import AlbumHeader from './AlbumHeader/AlbumHeader';
import AlbumDetails from './AlbumDetails/AlbumDetails';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <AlbumHeader />
        <AlbumDetails />
      </React.Fragment>
    )
  }
}

export default App;