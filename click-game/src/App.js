import React, { Component} from 'react';
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import tiles from "./tiles.json";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      isGuessCorrect: true, 
      tiles: tiles, 
      score: 0,
      maxScore: 15,
      topScore: 0,
      message: "CLICK AN IMAGE TO BEGIN!"
    };
  }
  

  handleSaveClick = id => {
    const tilez = this.state.tiles;
    const tileClicked = tilez.filter(tile => tile.id === id);
    if(!tileClicked[0].clicked) {
      tileClicked[0].clicked = true;
      this.handleCorrectClick();
      // this.toggleAnimation(true);
      this.randomizeCharacters(tilez);
      this.setState({ tilez });
    } else {
      this.handleIncorrectClick();
      // this.toggleAnimation(false);
    }
  };

  randomizeCharacters = characters => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  handleCorrectClick = () => {
    this.setState({ isGuessCorrect: true });
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "CONGRATS! YOU WIN!",
        messageClass: "correct"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "YOU GUESSED CORRECTLY!",
        messageClass: "correct"
      });
    }
  };

  handleIncorrectClick = () => {
    this.setState({
      message: "INCORRECT. PLAY AGAIN?",
      isGuessCorrect: false
    });
    // this.toggleIncorrectAnimation();
    this.resetGame();
  };

  resetGame = id => {
    const tilez = this.state.tiles;
    for (let i = 0; i < tilez.length; i++) {
      tilez[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  render() {
    const { message, score, tiles, topScore } = this.state;
    return (
      <div className="lodge">
        <Navbar
          className="row"
          score={score}
          topScore={topScore}
          message={message}
        />
        <Header className="bg-header row" />
        <div className="tiles">
          {tiles.map(({ id, name, image, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
              clickHandler={this.handleSaveClick}
            />
          ))}
        </div>

        <Footer className="footer-mgn row" />
      </div>
    );
  }
};


export default App;
