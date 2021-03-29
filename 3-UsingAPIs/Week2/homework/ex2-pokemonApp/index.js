'use strict';

/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populates the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Try and avoid using global variables. Instead, use function parameters and 
return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw new Error(`Network error ${error}`);
  }
}

async function fetchAndPopulatePokemons(url) {
  await fetchData(url)
    .then((data) => {
      createPokemonSelect(data.results);
    })
    .catch((error) => {
      renderError(error);
    });
}

function createPokemonSelect(pokemons) {
  const selectElement = document.querySelector('#selectElement');
  pokemons.forEach((pokemon) => {
    const selectItem = document.createElement('option');
    selectItem.setAttribute('value', pokemon.name);
    selectItem.textContent = pokemon.name;
    selectElement.appendChild(selectItem);
  });
}

async function fetchImage(pokemon) {
  await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((data) => {
      createPokemonImage(data.sprites.front_default, data.name);
    })
    .catch((error) => {
      renderError(error);
    });
}

function createPokemonImage(pokemonImageUrl, pokemonName) {
  const pokemonImage = document.querySelector('#pokemonImage');
  pokemonImage.setAttribute('src', pokemonImageUrl);
  pokemonImage.setAttribute('alt', pokemonName);
}

function initializePageElements() {
  const selectElement = document.createElement('select');
  selectElement.id = 'selectElement';

  const selectItem = document.createElement('option');
  selectItem.setAttribute('value', '0');
  selectItem.textContent = 'Select Pokemon';
  selectElement.appendChild(selectItem);
  document.body.appendChild(selectElement);

  const pokemonImage = document.createElement('img');
  pokemonImage.id = 'pokemonImage';
  pokemonImage.style.display = 'block';
  document.body.appendChild(pokemonImage);

  resetPokemonImage();

  selectElement.addEventListener('change', () => {
    if (selectElement.value === '0') {
      resetPokemonImage();
    } else {
      fetchImage(selectElement.value);
    }
  });
}

function resetPokemonImage() {
  const pokemonImage = document.querySelector('#pokemonImage');
  pokemonImage.setAttribute(
    'src',
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  );
  pokemonImage.setAttribute('alt', 'PokéAPI');
}

function renderError(error) {
  const headerText = document.createElement('h1');
  headerText.textContent = error;
  document.body.appendChild(headerText);
}

function main() {
  initializePageElements();
  fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon/?limit=20');
}

window.addEventListener('load', main);
