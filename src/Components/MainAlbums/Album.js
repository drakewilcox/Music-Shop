import React from 'react';
import PropTypes from "prop-types";

const Album = (props) => {
  return (
    <div className="album" id={props.key}>
      <h2>{props.title} - {props.artist}</h2>
      <button type="button">Remove</button>
      <img src={props.image}></img>
      <button id={props.key} onClick={props.onAlbumClick}>See Details</button>
    </div>
  )
}

Album.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string, 
  artist: PropTypes.string
}

export default Album;

