import './App.css';
import React from 'react';
import HelloWorld from './HelloWorld';
import Header from './components/header';
import Body1 from './components/body1';
import Body2 from './components/body2';
import Footer from './components/footer';

import Recipe from './components/recipe';
import RecipeContainer from './components/recipeContainer';

import './css/app.css'

function App() {
  return (
    <div>
      <Header />
      <div class="spacer"></div>
      <div class="spacer"></div>
      <Body1 />
      <div class="spacer"></div>
      <RecipeContainer/>
      <div class="spacer"></div>
      <Body2 />
      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="spacer"></div>
      <Footer />
    </div>
  );
}

export default App;
