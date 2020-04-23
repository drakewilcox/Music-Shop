import React from 'react';
import Album from '../MainAlbums/Album'
import PropTypes from 'prop-types';

function ShoppingCart(props){
  return (
    <React.Fragment>
      <h1>YOUR ITEMS: </h1>
      {props.albums.map((album, index) => (
        <div key={index}>
          <p>ARTIST: { album.title }</p>
          <p>TITLE: { album.artist} </p>
        </div> 
      ))}
    </React.Fragment>
  )
}

ShoppingCart.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object),
}

export default ShoppingCart;