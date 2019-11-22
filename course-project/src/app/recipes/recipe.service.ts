import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
            'Classic Lasagna Recipe', 
            'Do not overcook your noodles!', 
            'https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=1xw:1xh;center,top&resize=768:*', 
            [
                new Ingredient('lasagna noodles', 1),
                new Ingredient('sliced mozzarella', 2)
            ]),
        new Recipe(
            'Easy Crêpes', 
            'Crepes are actually SO simple to make!', 
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-basic-crepes-horizontal-1545245797.jpg?crop=0.6668xw:1xh;center,top&resize=980:*', 
            [
                new Ingredient('whole milk', 1),
                new Ingredient('large eggs', 2)
            ])
      ];


    constructor(private slService: ShoppingListService) { }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
    }

}