import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('#1 test recipe', 'This is a test', 'https://images.media-allrecipes.com/images/56589.png'),
        new Recipe('#2 test recipe', 'This is a test', 'https://images.media-allrecipes.com/images/56589.png')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}