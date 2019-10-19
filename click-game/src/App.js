import React, { Component} from 'react';
import Card from "./components/card/index";
import Wrapper from "./components/wrapper/index";
import Title from "./components/title/index";
import friends from "./friends.json";
import './App.css';

class App extends Component {
  state = {
    friends
  };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends })
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
        <Card
        id={friend.id}
        name={friend.name}
        image={friend.image}
        />
        ))}
      </Wrapper>
    );
  }
}

export default App;
