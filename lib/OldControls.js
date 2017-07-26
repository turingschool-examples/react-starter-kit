import React from 'react'

export default function OldControls(props) {
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      props.handleBtnClick()
    }
  }

  return (
    <div>
      <input
        type="text"
        value={props.inputVal}
        onChange={props.handleChange}
        onKeyDown={handleKeyDown}/>

      {
        props.inputVal &&
        <button type="submit" onClick={ props.handleBtnClick }>
          Add Item
        </button>
      }
    </div>
  );
}
