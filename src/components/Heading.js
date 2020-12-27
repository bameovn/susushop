import React, { Component } from "react";

export default class Heading extends Component {

    
  render() {
    console.log(this.props)
    return (
      <div>
        <h2 class="heading2">
          {this.props.title}
          <hr />
        </h2>
      </div>
    );
  }
}
