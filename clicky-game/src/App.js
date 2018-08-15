import React, { Component } from "react";
import CartoonCard from "./components/CartoonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cartoons from "./cartoons.json";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

var clickIdArray = [];

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.cartoons to the cartoons json array
  state = {
    cartoons,
    score: 0,
    topScore: 0,
    clickIdArray: [],
    clickMessage:
      "Click on an image to earn points, but don't click on any more than once!"
  };

  clickCartoon = id => {
    // Before the first cartoon is clicked the clickIdArray will be empty
    // array is empty
    if (this.state.clickIdArray.length === 0) {
      // Adding 1 to the score
      const score = this.state.score + 1;

      let newArray = this.state.clickIdArray;
      newArray.push(id);

      this.setState({
        score,
        clickIdArray: newArray,
        cartoons: shuffleArray(cartoons)
      });

      this.setState({ clickMessage: "You guessed correctly!" });
    } else {
      console.log("else");
      // Filter this.state.clickIdArray for cartoons with an id not equal to the id being clicked
      const filclickIdArray = this.state.clickIdArray.filter(pickedID => {
        return pickedID === id;
      });

      // The filclickIdArray will be empty is the cartoon was not clicked previously by the person
      // array is empty
      if (!Array.isArray(filclickIdArray) || !filclickIdArray.length) {
        //if(this.state.filclickIdArray.length === 0) {

        // Adding 1 to the score
        const score = this.state.score + 1;

        let newArray = this.state.clickIdArray;
        newArray.push(id);

        this.setState({
          score,
          clickIdArray: newArray,
          cartoons: shuffleArray(cartoons)
        });
        this.setState({ clickMessage: "You guessed correctly!" });
      } else {
        // Setting the top score
        if (this.state.score > this.state.topScore) {
          const score = this.state.score;
          const topScore = this.state.score;
          this.setState({ topScore: score });
        }

        // Updating the score
        this.setState({
          score: 0,
          clickIdArray: [],
          cartoons: shuffleArray(cartoons)
        });
        this.setState({ clickMessage: "You guessed incorrectly!" });
      }
    }
  };

  // Map over this.state.cartoons and render a CartoonCard component for each cartoon object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Wrapper>
          <Title>Cartoon List</Title>
          <div className="col-md-12">
            <h1> {this.state.clickMessage}</h1>
          </div>
          {this.state.cartoons.map(cartoon => (
            <CartoonCard
              clickCartoon={this.clickCartoon}
              id={cartoon.id}
              key={cartoon.id}
              name={cartoon.name}
              image={cartoon.image}
              occupation={cartoon.occupation}
              location={cartoon.location}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
