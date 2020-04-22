import React from 'react';
import PropTypes from 'prop-types';

const AlbumDetails = (props) => {
  return (
    <div >
      <p>Description: {props.album.description}</p>
      <div className="buttons">
        <button>Buy</button>
        <p>Quantity</p>
        <button>Restock</button>
      </div>
    </div>
  )
}

AlbumDetails.propTypes = {
  description: PropTypes.object
}

export default AlbumDetails;