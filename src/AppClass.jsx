import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };
  render() {
    let image_arr = this.imageData();
    return (
      <>
        <h1> Kalvium Gallery</h1>
        {/* <div className="gallery">
              <img src={image_arr[0].img}></img>
              <img src={image_arr[1].img}></img>
              <img src={image_arr[2].img}></img>
              <img src={image_arr[3].img}></img>
            </div> */}
        <div className="gallery">
          {image_arr.map((elem) => {
            return <img src={elem.img} className="image"></img>;
          })}
        </div>
      </>
    );
  }
  // code here
}
