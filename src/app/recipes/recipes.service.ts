import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Rump Steak with Garlic",
      imageUrl:
        "https://www.thespruceeats.com/thmb/t6qviPDXGj_mIMtYUU3_EQdKyTE=/1333x1000/smart/filters:no_upscale()/top-sirloin-cap-or-picanha-p2-4119892-hero-01-15fed666c2df434f94c28923e9303acc.JPG",
      ingredients: ["Rump", "Garlic", "Salt", "Black Pepper"],
    },

    {
      id: "r2",
      title: "Brazilian Carrot Cake",
      imageUrl:
        "https://www.receitasnestle.com.br/images/default-source/recipes/bolo_de_cenoura_com_aveia_alta.tmb-customthum.jpg",
      ingredients: ["Carrot", "Eggs", "Sugar", "Chocolate", "More Sugar"],
    },

    {
      id: "r3",
      title: "Brazilian Rain Drop",
      imageUrl: "https://i.ytimg.com/vi/TW5ul180mdg/maxresdefault.jpg",
      ingredients: ["Flour", "Egg", "Sugar", "Milk"]
      
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId
    })}
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }

}
