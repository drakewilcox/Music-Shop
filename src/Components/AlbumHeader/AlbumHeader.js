import React from 'react';
import PropTypes from 'prop-types';

const AlbumHeader = (props) => {
  return (
    <div className="detailsHeader">
      <img className="albumDetailsImg" src={props.album.image} alt=""/>
      <h1>{props.album.title} - {props.album.artist}</h1>
      <button onClick={props.handleBackToAlbums}>Back to Albums</button>
    </div>
  )
}

AlbumHeader.propTypes = {
  album: PropTypes.object
}

export default AlbumHeader;