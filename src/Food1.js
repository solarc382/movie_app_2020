import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// function Food(props) {
//   return <h1>I like {props.fav}</h1>;
// } same as above

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://mommyson.files.wordpress.com/2013/06/ec9984ec84b1-2.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://1.bp.blogspot.com/-pNQI_9YAcJM/VBTxavO6YMI/AAAAAAAACk4/-OHN-keA9UU/s1600/20140909_204156.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://www.thespruceeats.com/thmb/4Qckb9A9KGyG-q_czTZieMWCGgk=/2048x1367/filters:fill(auto,1)/classic-korean-bibimbap-recipe-2118765_20_preview-5b1ee284ba61770037c8ad38.jpeg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media4.fl.yelpcdn.com/bphoto/anesu6IAyAj2d6r19eFqEg/o.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://koreanupdatesweb.files.wordpress.com/2015/03/kimbap1.jpg",
    rating: 4.6,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
