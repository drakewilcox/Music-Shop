import React from 'react';
import PropTypes from 'prop-types';

const AlbumHeader = (props) => {
  return (
    <div className="detailsHeader">
      <div className="columns">
        <div className="column1">
          <img className="albumDetailsImg" src={props.album.image} alt=""/>
        </div>
        <div className="column2">
          <h1>{props.album.title} by <em>{props.album.artist}</em></h1>
          <button onClick={props.handleBackToAlbums}>Back to Albums</button>
        </div>
        <div className="column3">
        </div>
      </div>
    </div>
  )
}

AlbumHeader.propTypes = {
  album: PropTypes.object
}

export default AlbumHeader;