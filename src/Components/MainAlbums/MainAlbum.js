import React from 'react';
import Album from './Album';
import PropTypes from "prop-types";

const MainAlbum = (props) => {
  return (
    <React.Fragment>
      {props.albums.map((album, index) => (
        <Album 
          key={index}
          title={album.title}
          artist={album.artist}
          image={album.image}
          onAlbumClick={props.handleAlbumSelection} />
      ))}
      <form>
        <input
          type="text"
          name="albumName"
          placeholder="Album Name" />
        <input
          type="text"
          name="artistName"
          placeholder="Artist Name" />
        <input
          type="text"
          name="albumImg"
          placeholder="Link to Album Cover" />
        <button type='submit'>Add Album</button>
      </form>
    </React.Fragment>
  )
}

MainAlbum.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object)
}

export default MainAlbum;