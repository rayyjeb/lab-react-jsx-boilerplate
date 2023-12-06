import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
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

function App() {
  let image_arr = imageData();
  // code here
  return (
    <>
      <h1> Kalvium Gallery</h1>
      {/* <div className="gallery">
          <img src={image_arr[0].img}></img>
          <img src={image_arr[1].img}></img>
          <img src={image_arr[2].img}></img>
          <img src={image_arr[3].img}></img>
        </div> */}
      <div className="parent_div">
        {image_arr.map((elem) => {
          return <img src={elem.img} className="image"></img>;
        })}
      </div>
    </>
  );
}

export default App;
