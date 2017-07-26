import React from 'react';

export default function GroceryItem (props) {
  return (
    <li>
      { props.name }
      <button onClick={ props.handleClick }>
        X
      </button>
    </li>
  )
}
