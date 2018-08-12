import React, { Component } from "react";
import CartoonCard from "./components/CartoonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cartoons from "./cartoons.json";
import "./App.css";


var clickIdArray= [];

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
    clickIdArray: []
  };

  
  clickCartoon = id => {

    var wasClicked = false;

    // array does not exist, is not an array, or is empty
    if (!Array.isArray(clickIdArray) || !clickIdArray.length) {

      // Adding 1 to the score
      this.setState({ score: this.state.score + 1 });

      // Adding id of clicked cartoon to array
      var newclickIdArray = this.state.clickIdArray.slice();    
      newclickIdArray.push(cartoon.id);   
      this.setState({clickIdArray:newclickIdArray})

      // Shuffle the cartoons array
      shuffleArray(cartoons);
      
    } else {

      // Checking to see if the cartoon has been clicked before
      for (let i=0; i<clickIdArray.length; i++) {
        if(id = cartoon.id){
          wasClicked = true;
          break;
        }
      }    
    }

    if(wasClicked) {

       // Updating the score
       this.setState({ score: 0 });

       // Clearing the ClickIdArray
       clickIdArray= [];

        // Shuffle the cartoons array
        shuffleArray(cartoons);

    } else {

      // Adding 1 to the score
      this.setState({ score: this.state.score + 1 });

      // Adding id of clicked cartoon to array
      var newclickIdArray = this.state.clickIdArray.slice();    
      newclickIdArray.push(cartoon.id);   
      this.setState({clickIdArray:newclickIdArray})

      // Shuffle the cartoons array
      shuffleArray(cartoons);

    };
  };

  
  // Map over this.state.cartoons and render a CartoonCard component for each cartoon object
  render() {
    return (
      <Wrapper>
        <Title>Cartoons List</Title>
        {this.state.cartoons.map(cartoon => (
          <CartoonCard
            removeCartoon={this.removeCartoon}
            id={cartoon.id}
            key={cartoon.id}
            name={cartoon.name}
            cartoon={cartoon.cartoon}
            occupation={cartoon.occupation}
            location={cartoon.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;