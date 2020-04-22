import React from 'react';
import AlbumHeader from './AlbumHeader/AlbumHeader';
import AlbumDetails from './AlbumDetails/AlbumDetails';
import MainHeader from './MainHeader/MainHeader';
import MainAlbum from './MainAlbums/MainAlbum';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHomePage: true
    }
  }
  
  albumList = [
    {
      title: "Dark Side of the Moon",
      artist: "Pink Floyd",
      image: "https://miro.medium.com/max/2480/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg"
    },
    {
      title: "City To City",
      artist: "Gerry Rafferty",
      image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Citytocity.jpg"
    },
    {
      title: "Blondes Have More Fun",
      artist: "Rod Stewart",
      image: "https://upload.wikimedia.org/wikipedia/en/3/35/Rod_Stewart_-_Blondes_Have_More_Fun_%28album_cover%29.jpg"
    },
    {
      title: "Africa",
      artist: "TOTO",
      image: "https://cdn-s3.allmusic.com/release-covers/500/0000/866/0000866482.jpg"
    },
    {
      title: "Can't Buy A Thrill",
      artist: "Steely Dan",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Cant_buy_a_tcant_buy_a_thrill.jpg"
    },
    {
      title: "Careless Whisper",
      artist: "George Michael",
      image: "https://img.discogs.com/j_OGjQLde9lJ7Om9Pd6gVHtuIpM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1296467-1354892016-3591.jpeg.jpg"
    }
  ];

  handleAlbumSelection = (event) => {
    console.log(event.target.id);
  }

  currentPage = () => {
    if (this.state.showHomePage) {
      return {
        header: <MainHeader />,
        body: <MainAlbum 
            albums={this.albumList}
            handleAlbumSelection={this.handleAlbumSelection} />
      }
    } else {
      return {
        header: <AlbumHeader />,
        body: <AlbumDetails />
      }
    }
  };

  render() {
    let currentPage = this.currentPage();
    return (
      <React.Fragment>
        {currentPage.header}
        {currentPage.body}
      </React.Fragment>
    )
  }
}

export default App;