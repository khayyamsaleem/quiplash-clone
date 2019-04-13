import React from 'react';

export default class Scoreboard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     const playerCount = 5;
    //     // this.state = { };
    // }

    render() {
      const names = ["Disha", "Jody", "Larry", "Rebecca", "Richard"];
      const listItems = names.map((name) =>
        <li>{name}</li>
      );
      return (
        <ul>{listItems}</ul>
      )
    }
}
