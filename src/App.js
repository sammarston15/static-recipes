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
    const rows = /\\r+\\n+/;
    const instructions = JSON.stringify(recipeFull.strInstructions);
    const newInstructions = instructions.split(rows).map(i => {
      console.log('hit i: ', i)
      return <p className='instructions'>{i}</p>
    });
    // const finalInstructions = newInstructions.split(rows).map(i => {
    //   return <div>{i}</div>
    // })
    console.log( "newInstructions: ", typeof newInstructions)

    swal({
      title: recipeFull.strMeal,
      buttons: {
        cancel: "Close",
      },
      content: (
        <div className="recipe-container">
          <div class="a">ingredients</div>
          <div class="d">
            {recipeFull.strIngredient1 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient1}</div>
                <div class="strMeasure1">{recipeFull.strMeasure1}</div>
              </>
            ) : null}
            {recipeFull.strIngredient2 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient2}</div>
                <div class="strMeasure1">{recipeFull.strMeasure2}</div>
              </>
            ) : null}
            {recipeFull.strIngredient3 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient3}</div>
                <div class="strMeasure1">{recipeFull.strMeasure3}</div>
              </>
            ) : null}
            {recipeFull.strIngredient4 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient4}</div>
                <div class="strMeasure1">{recipeFull.strMeasure4}</div>
              </>
            ) : null}
            {recipeFull.strIngredient5 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient5}</div>
                <div class="strMeasure1">{recipeFull.strMeasure5}</div>
              </>
            ) : null}
            {recipeFull.strIngredient6 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient6}</div>
                <div class="strMeasure1">{recipeFull.strMeasure6}</div>
              </>
            ) : null}
            {recipeFull.strIngredient7 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient7}</div>
                <div class="strMeasure1">{recipeFull.strMeasure7}</div>
              </>
            ) : null}
            {recipeFull.strIngredient8 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient8}</div>
                <div class="strMeasure1">{recipeFull.strMeasure8}</div>
              </>
            ) : null}
            {recipeFull.strIngredient9 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient9}</div>
                <div class="strMeasure1">{recipeFull.strMeasure9}</div>
              </>
            ) : null}
            {recipeFull.strIngredient10 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient10}</div>
                <div class="strMeasure1">{recipeFull.strMeasure10}</div>
              </>
            ) : null}
            {recipeFull.strIngredient11 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient11}</div>
                <div class="strMeasure1">{recipeFull.strMeasure11}</div>
              </>
            ) : null}
            {recipeFull.strIngredient12 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient12}</div>
                <div class="strMeasure1">{recipeFull.strMeasure12}</div>
              </>
            ) : null}
            {recipeFull.strIngredient13 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient13}</div>
                <div class="strMeasure1">{recipeFull.strMeasure13}</div>
              </>
            ) : null}
            {recipeFull.strIngredient4 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient14}</div>
                <div class="strMeasure1">{recipeFull.strMeasure14}</div>
              </>
            ) : null}
            {recipeFull.strIngredient15 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient15}</div>
                <div class="strMeasure1">{recipeFull.strMeasure15}</div>
              </>
            ) : null}
            {recipeFull.strIngredient16 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient16}</div>
                <div class="strMeasure1">{recipeFull.strMeasure16}</div>
              </>
            ) : null}
            {recipeFull.strIngredient17 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient7}</div>
                <div class="strMeasure1">{recipeFull.strMeasure17}</div>
              </>
            ) : null}
            {recipeFull.strIngredient18 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient18}</div>
                <div class="strMeasure1">{recipeFull.strMeasure18}</div>
              </>
            ) : null}
            {recipeFull.strIngredient19 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient19}</div>
                <div class="strMeasure1">{recipeFull.strMeasure19}</div>
              </>
            ) : null}
            {recipeFull.strIngredient20 ? (
              <>
                <div class="strIngredient1">{recipeFull.strIngredient20}</div>
                <div class="strMeasure1">{recipeFull.strMeasure20}</div>
              </>
            ) : null}
            
          </div>
          <div class="box c">{newInstructions}</div>
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

  // console.log("recipesHome: ", recipesHome[0].strInstructions);
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
        Welcome to RecipeDigital! Feel free to search for a recipe.
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
