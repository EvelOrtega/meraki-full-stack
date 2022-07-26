import React, { Component } from "react";
import MenuBar from "./MenuBar";
import VideoCard from "./MusicCard";
import { db } from "../../db/db";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 1 };
  }
  next = () => {
    let current = this.state.current;
    if (current === db.alternative.length) this.setState({ current: 1 });
    else {
      this.setState({ current: this.state.current + 1 });
    }
  };

  prev = () => {
    let current = this.state.current;
    if (current === 1) this.setState({ current: 1 });
    else {
      this.setState({ current: this.state.current - 1 });
    }
  };

  play = () => {
    document.getElementById("video").src += "?autoplay=1";
  };

  render() {
    return (
      <div className="Player">
        <MenuBar />
        <VideoCard
          data={db.alternative[this.state.current - 1]}
          prev={() => this.prev()}
          next={() => this.next()}
          play={() => this.play()}
        />
      </div>
    );
  }
}

export default Player;
