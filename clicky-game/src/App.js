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
    clickIdArray: []
  };

  clickCartoon = id => {
    console.log("cartoon cliked id: "+id);
    // Before the first cartoon is clicked the clickIdArray will be empty
    // array does not exist, is not an array, or is empty
    if (!Array.isArray(clickIdArray) || !clickIdArray.length) {
      // Adding 1 to the score
      const score = this.state.score + 1
      let newArray = this.state.clickIdArray
      newArray.push(id)
      console.log("newArray: "+ newArray)
      this.setState({ score, clickIdArray: newArray, cartoons: shuffleArray(cartoons) });
    } else {
      // Filter this.state.clickIdArray for cartoons with an id not equal to the id being clicked
      console.log("clickIdArray: "+clickIdArray)
      const filclickIdArray = this.state.clickIdArray.filter(
        pickedID => pickedID.id === id
      );

      // The filclickIdArray will be empty is the cartoon was not clicked previously by the person
      // array does not exist, is not an array, or is empty
      if (!Array.isArray(filclickIdArray) || !filclickIdArray.length) {
        // Adding 1 to the score
      const score = this.state.score + 1
      let newArray = this.state.clickIdArray
      newArray.push(id)
      console.log("newArray: "+ newArray)
      this.setState({ score, clickIdArray: newArray, cartoons: shuffleArray(cartoons) });
      } else {
        // Updating the score
        this.setState({ score: 0, clickIdArray: [], cartoons: shuffleArray(cartoons) });

      }
    }
  };

  // Map over this.state.cartoons and render a CartoonCard component for each cartoon object
  render() {
    return (
      <div>
      <Navbar></Navbar>
        <Wrapper>
          <Title>Cartoon List</Title>
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
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
