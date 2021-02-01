import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";

// COMPONENTS
import Nav from "./components/nav/Nav";
import dummyData from './dummyData';

// PACKAGES
import axios from "axios";

const App = () => {
  const [recipesHome, setRecipesHome] = useState([]);

  // USE BELOW WHEN USING API=============================================================================
  // const [loading, setLoading] = useState(true);

  // USE BELOW WHEN TESTING===============================================================================
  const [loading, setLoading] = useState(false);

  

  // USE WHEN USING THE API=====================================================================================
  // useEffect(() => {
  //   // GET LATEST MEALS
  //   const options = {
  //     method: "GET",
  //     url: "https://themealdb.p.rapidapi.com/latest.php",
  //     headers: {
  //       "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
  //       "x-rapidapi-host": "themealdb.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then( (response) => {
  //       setRecipesHome(response.data.meals);
  //       setLoading(false);
  //     })
  //     .catch( (error) => {
  //       console.error(error);
  //     });
  // }, []);

  const loadingPage = () => {
    return (
      <div className="loading-container">
        <div className="loading">
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
        </div>
      </div>
    );
  };

  // USE THIS CODE WHEN USING API====================================================================================
  // const pageLoadRecipes = recipesHome.map((recipe, i) => {
  //   return (
  //     <div className="recipeCard" key={i}>
  //       <img src={recipe.strMealThumb} alt="recipe" />
  //       <div className="recipeTitle">{recipe.strMeal}</div>
  //     </div>
  //   );
  // });
  // ================================================================================================================

  // USE THIS CODE WHEN TESTING===================
  const pageLoadRecipesDummy = dummyData.map((recipe, i) => {
      return (
        <div className="recipeCard" key={i}>
          <img src={recipe.strMealThumb} alt="recipe" />
          <div className="recipeTitle">{recipe.strMeal}</div>
        </div>
      );
    });

  // console.log("recipesHome: ", recipesHome);
  // console.log("dummyData: ", dummyData);
  return (
    <div className="App">
      <Nav />

      {/* WELCOME MESSAGE */}
      <div className="welcome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora delectus. Corrupti, voluptas laborum. Molestiae velit, provident totam ad nostrum laboriosam sit, nam deserunt esse nihil obcaecati error nesciunt labore.</div>

      {loading ? (
        loadingPage()
      ) : (
        <div className="content-container">
          {/* USE BELOW WHEN USING API */}
          {/* {pageLoadRecipes} */}

          {/* USE BELOW WHEN TESTING   */}
          {pageLoadRecipesDummy}
        </div>
      )}
    </div>
  );
};

export default App;
