import React from 'react';
import PropTypes from "prop-types";

const Album = (props) => {
  return (
    <div className="album" id={props.id}>
      <button onClick={() => props.handleAlbumDelete(props.id)} type="button">Remove</button>
      <img src={props.image} alt=""></img>
      <h5>{props.title} - {props.artist}</h5>
      <button className="albumDetailsButton" onClick={() => props.onAlbumClick(props.id)}>See Details</button>
    </div>
  )
}
Album.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string, 
  artist: PropTypes.string,
  id: PropTypes.string,
  onAlbumClick: PropTypes.func
}

export default Album;

