import './App.css';
import axios from 'axios';

const App = () => {

  const getRecipeTest = () => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract',
      params: {url: 'http://www.melskitchencafe.com/the-best-fudgy-brownies/'},
      headers: {
        'x-rapidapi-key': '2701f858eemshfce0a3efecb24c0p12b082jsnb8953eaa8184',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className="App">
      hello world
      <button onClick={getRecipeTest}>get recipe</button>
    </div>
  );
}

export default App;
