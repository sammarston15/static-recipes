import React, { useState } from "react";
import "./Search.css";

import axios from "axios";
import swal from "@sweetalert/with-react";

const Search = () => {
  const [searchState, setSearchState] = useState('');
  const [loading, setLoading] = useState(false);

  const submitSearch = () => {
    setLoading(true);
    iconLoading();

    const options = {
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/search.php",
      params: { s: searchState },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
        "x-rapidapi-host": "themealdb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSearchState('');
        setLoading(false);
        iconLoading();
        const mealMap = response.data.meals.map(meal => {
           return (
               <div className="searchResult" key={meal.idMeal}>
                   <img src={meal.strMealThumb} alt="" width='100px' height='100px'/>
                   <div>{meal.strMeal}</div>
               </div>
           )
        })
        swal({
          title: `Results for: '${searchState}'`,
          buttons: {
            cancel: "Close",
          },
          content: (
            <div>
                {loading?
                "loading"
                :     
                mealMap
            }
            </div>
          ),
        });
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const iconLoading = () => {
    const searchButton = document.querySelector(".search-icon");
    searchButton.classList.toggle("searchLoading");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for meals by name..."
        value={searchState}
        id=""
        onChange={(e) => setSearchState(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="search-icon" onClick={submitSearch}>
        <i class="fas fa-search"></i>
      </button>
      {/* loading */}
    </div>
  );
};

export default Search;
