import React from 'react'
import GroceryItem from './GroceryItem'
import Controls from './Controls'
import OldControls from './OldControls'
import style from './style'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newItem: '',
      groceryItems: [
        { name: 'oreos' },
        { name: 'milk' },
      ]
    }
  }

  addItem() {
    this.setState({
      groceryItems: [ ...this.state.groceryItems, { name: this.state.newItem } ]
    })
  }

  handleChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  deleteItem(index) {
    this.state.groceryItems.splice(index, 1);

    this.setState({
      groceryItems: this.state.groceryItems
    })
  }

  render() {

    return (
      <div class="background">
        <h2>Grocery List</h2>

        <OldControls
          inputVal={this.state.newItem}
          handleChange={this.handleChange.bind(this)}
          handleBtnClick={this.addItem.bind(this)} />

        <ul>
          {
            this.state.groceryItems.map( ( item, index ) =>
              <GroceryItem
                name={item.name}
                handleClick={ () => { this.deleteItem(index) } } />
            )
          }
        </ul>
      </div>
    )
  }
}
