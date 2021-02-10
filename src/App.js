import React, { useEffect, useState } from "react";
import "./reset.css";
import "./App.css";

// COMPONENTS
import Nav from "./components/nav/Nav";
// import dummyData from "./dummyData";

// PACKAGES
import axios from "axios";
// import { Helmet } from "react-helmet";
import swal from "@sweetalert/with-react";

const App = () => {
  const [recipesHome, setRecipesHome] = useState([]);

  // USE BELOW WHEN USING API=============================================================================
  const [loading, setLoading] = useState(true);

  // USE BELOW WHEN TESTING===============================================================================
  // const [loading, setLoading] = useState(false);

  // USE WHEN USING THE API=====================================================================================
  useEffect(() => {
    // GET LATEST MEALS
    const options = {
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/latest.php",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setRecipesHome(response.data.meals);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

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

  const recipeClick = (recipeFull) => {
    swal({
      title: recipeFull.strMeal,
      buttons: {
        cancel: "Close",
      },
      content: (
        <div className="recipe-container">
          <div class="box a">ingredients</div>
          <div class="box d">
            <div class="box strIngredient1">{recipeFull.strIngredient1}</div>
            <div class="box strMeasure1">{recipeFull.strMeasure1}</div>
            <div class="box strIngredient2">{recipeFull.strIngredient2}</div>
            <div class="box strMeasure2">{recipeFull.strMeasure2}</div>
            <div class="box strIngredient3">{recipeFull.strIngredient3}</div>
            <div class="box strMeasure3">{recipeFull.strMeasure3}</div>
          </div>
          <div class="box c">{recipeFull.strInstructions}</div>
        </div>
      ),
    });
  };

  // USE THIS CODE WHEN USING API====================================================================================
  const pageLoadRecipes = recipesHome.map((recipe) => {
    return (
      <div
        className="recipeCard"
        key={recipe.idMeal}
        onClick={() => recipeClick(recipe)}
      >
        <img src={recipe.strMealThumb} alt="recipe" />
        <div className="recipeTitle">{recipe.strMeal}</div>
        <div className="recipeTag">{recipe.strCategory}</div>
      </div>
    );
  });
  // ================================================================================================================

  // USE THIS CODE WHEN TESTING===================
  // const pageLoadRecipesDummy = dummyData.map((recipe, i) => {
  //   return (
  //     <div className="recipeCard" key={i}>
  //       <img src={recipe.strMealThumb} alt="recipe" />
  //       <div className="recipeTitle">
  //         {recipe.strMeal} <span>{recipe.strCategory}</span>
  //       </div>
  //     </div>
  //   );
  // });

  console.log("recipesHome: ", recipesHome);
  // console.log("dummyData: ", dummyData);
  return (
    <div className="App">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>RecipeDigital</title>
        <link rel="canonical" href="http://mysite.com/example" />
        
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z7TWF2N9QZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-Z7TWF2N9QZ');
</script>
      </Helmet> */}
      <Nav />

      {/* WELCOME MESSAGE */}
      <div className="welcome">
        *This website is currently in progress. The search bar does not work and will need to be worked next.
      </div>

      {loading ? (
        loadingPage()
      ) : (
        <div className="content-container">
          {/* USE BELOW WHEN USING API */}
          {pageLoadRecipes}

          {/* USE BELOW WHEN TESTING   */}
          {/* {pageLoadRecipesDummy} */}
        </div>
      )}
    </div>
  );
};

export default App;
