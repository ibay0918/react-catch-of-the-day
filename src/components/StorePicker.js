import React from 'react';
import { render } from 'react-dom';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    //Stop store from submitting
    e.preventDefault();

//Get the text from that input
  const storeName = this.myInput.value.value;

// Change the page to /store/whatever they entered
  this.props.history.push(`/store/${storeName}`);

  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}/>
        <button type="submit">Visit Store --></button>
      </form>
    );
  }
}

export default StorePicker;
