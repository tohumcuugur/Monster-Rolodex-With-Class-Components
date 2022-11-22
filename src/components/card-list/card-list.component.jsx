import { Component } from "react";

import Card from "../card/card-component";
import "./card-list.styles.css"

class CardList extends Component {
  render() {
    // console.log("render from cardlist");
    // console.log(this.props.monsters);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {
          monsters.map((monster ,index) => {
            return <Card  key={index} monster={monster} />
          })
        }

      </div>
    );
  }
}

export default CardList;
