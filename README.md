# PokéList - Pokémon API Consumer Pokédex
## Overview
<img src="../poke-info/src/assets/images/pokedex-api-overview.png" alt="Imagem exemplo">

> The project is a website which consumes the public Pokémon API, listing each one pokémon in cards, being possible to access a page with details. It's possible to navigate through pages, and there's a theme-toggler system.

### Description

Users should be able to:

- Scroll through pokémon's 50 at a time, according to the Pokédex Order;
- See a image, name and pokédex ID of the pokémon on cards;
- When clicking the "Show more" button, it should load 50 more pokémon;
- Change between "Dark" and "Light" themes;
- When clicking any card, navigate to the pokémon details page;
- Navigate to prev and next pokémon inside of the pokémon details page.
- See the pokémon's stats, abilities and moves when in the pokémon details page.

### Features

The project has some interesting features to enhance the user's experience like:

- A search filter feature;
- A type filter that works together with the search filter;
- A theme toggler button;
- Dynamic stat bars at the pokémon details page;
- And more!

## Challenges and Learning

### Otimizating API fetches with Axios and organizating the fetches' responses:

- About the API fetches, i dedicated some time to otimizate the responses, only storing informations i'd use in the responses as an object.

### Making the filters work together:

 - In this project i did learn how to make the search filter and the type filter work together, using a variable to store the value of the filters and then passing these values as props to the pokemon list.

### Using JS code in the styled-components:

- I used the styled-components library to style most of the page, and i had to use JS code within the styles to, for example, turn the pokemons' stats bar colors dynamic.



### Built with

- [React](https://legacy.reactjs.org) - as Framework.
- [Axios](https://axios-http.com/ptbr/docs/intro) - For API actions.
- [React Router](https://reactrouter.com/en/main) - For URL navigation and SPA uses.
- [Context API](https://legacy.reactjs.org/docs/context.html) - For Theme Toggler use.
- [Styled Components](https://styled-components.com/) - For styles.



## 🚀 Installing poke-list-api

To install poke-list-api, follow these steps:

Windows:

```
git clone <project_url>
```

Install vite dependencies:

```
npm install vite
```

Run:

```
npm run dev
```

Then paste the localhost link in your browser's URL:

```
http://localhost:5173/
```

And then you're free to use!

## Links

- Repository URL: [pokédex](https://github.com/miguelralves/pokedex)
- Pokémon API Documentation URL: [Pokémon API](https://pokeapi.co/docs/v2)


## Author
Miguel Ribeiro Alves Barbosa

- GitHub - [@miguelralves](https://github.com/devito96)
- LinkedIn - [Miguel Ribeiro Alves Barbosa](https://www.linkedin.com/in/miguel-ribeiro-alves-544879280/)
- Instagram - [@ribeiroalvess14](https://www.instagram.com/ribeiroalvess14/)
