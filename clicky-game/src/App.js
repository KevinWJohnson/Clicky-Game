import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

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
  // Setting this.state.images to the images json array
  state = {
    images,
    score: 0,
    clickIdArray= []
  };

  
  clickImage = id => {

    var wasClicked = false;

    // array does not exist, is not an array, or is empty
    if (!Array.isArray(clickIdArray) || !clickIdArray.length) {

      // Adding 1 to the score
      this.setState({ score: this.state.score + 1 });

      // Adding id of clicked image to array
      var newclickIdArray = this.state.clickIdArray.slice();    
      newclickIdArray.push(image.id);   
      this.setState({clickIdArray:newclickIdArray})

      // Shuffle the images array
      shuffleArray(images);
      
    } else {

      // Checking to see if the image has been clicked before
      for (let i=0; i<clickIdArray.length; i++) {
        if(id = image.id){
          wasClicked = true;
          break; 
       }    
    }

    if(wasClicked) {

       // Updating the score
       this.setState({ score: 0 });

       // Clearing the ClickIdArray
       clickIdArray= [];

        // Shuffle the images array
        shuffleArray(images);

    } else {

      // Adding 1 to the score
      this.setState({ score: this.state.score + 1 });

      // Adding id of clicked image to array
      var newclickIdArray = this.state.clickIdArray.slice();    
      newclickIdArray.push(image.id);   
      this.setState({clickIdArray:newclickIdArray})

      // Shuffle the images array
      shuffleArray(images);

    }

  
  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <Wrapper>
        <Title>Images List</Title>
        {this.state.images.map(image => (
          <ImageCard
            removeImage={this.removeImage}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            occupation={image.occupation}
            location={image.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;