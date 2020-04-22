import React from 'react';
import AlbumHeader from './AlbumHeader/AlbumHeader';
import AlbumDetails from './AlbumDetails/AlbumDetails';
import MainHeader from './MainHeader/MainHeader';
import MainAlbum from './MainAlbums/MainAlbum';
import '../App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHomePage: true,
      albumList: [
        {
          title: "Dark Side of the Moon",
          artist: "Pink Floyd",
          image: "https://miro.medium.com/max/2480/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg",
          description: "An amazing album!",
          id: "42066691"
        },
        {
          title: "City To City",
          artist: "Gerry Rafferty",
          image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Citytocity.jpg",
          description: "An amazing album!",
          id: "42066692"
        },
        {
          title: "Blondes Have More Fun",
          artist: "Rod Stewart",
          image: "https://upload.wikimedia.org/wikipedia/en/3/35/Rod_Stewart_-_Blondes_Have_More_Fun_%28album_cover%29.jpg",
          description: "An amazing album!",
          id: "42066693"
        },
        {
          title: "Africa",
          artist: "TOTO",
          image: "https://cdn-s3.allmusic.com/release-covers/500/0000/866/0000866482.jpg",
          description: "An amazing album!",
          id: "42066694"
        },
        {
          title: "Can't Buy A Thrill",
          artist: "Steely Dan",
          image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Cant_buy_a_tcant_buy_a_thrill.jpg",
          description: "An amazing album!",
          id: "42066695"
        },
        {
          title: "Careless Whisper",
          artist: "George Michael",
          image: "https://img.discogs.com/j_OGjQLde9lJ7Om9Pd6gVHtuIpM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1296467-1354892016-3591.jpeg.jpg",
          description: "An amazing album!",
          id: "42066696"
        }
      ],
      currentSelectedAlbum: {}
    }
  }
  
  handleAlbumSelection = (id) => {
    const selectedAlbum = this.state.albumList.filter(album => album.id === id)[0];
    this.setState({
      currentSelectedAlbum: selectedAlbum,
      showHomePage: false
    })
  }

  handleAddingNewAlbum = (newAlbum) => {
    const newAlbumList = this.state.albumList.concat(newAlbum);
    this.setState({albumList: newAlbumList})
  }

  handleBackToAlbums = () => {
    this.setState({
      showHomePage: true
    })
  }

  currentPage = () => {
    if (this.state.showHomePage) {
      return {
        header: <MainHeader />,
        body: <MainAlbum 
            albums={this.state.albumList}
            onAlbumSelection={this.handleAlbumSelection}
            onNewAlbumCreation={this.handleAddingNewAlbum} />
      }
    } else {
      return {
        header: <AlbumHeader 
          album={this.state.currentSelectedAlbum}
          handleBackToAlbums={this.handleBackToAlbums}/>,
        body: <AlbumDetails album={this.state.currentSelectedAlbum}/>
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