import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  recepiesChanged = new Subject<Recipe[]>();
  ingredientChanged = new Subject<Ingredient[]>();
  private recipies: Recipe[] = [
    new Recipe(
      'kalács',
      'ez egy kalács',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/%C5%A0akotis_3799.jpg',
      [
          new Ingredient('fahéj', 1),
          new Ingredient('liszt', 10)
      ]
    ),
    new Recipe(
      'kalács2',
      'ez egy  második kalács',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/%C5%A0akotis_3799.jpg',
      [
        new Ingredient('cukor', 2),
          new Ingredient('tojás', 11)
      ]
    ),
  ];

  getRecipies() {
    return this.recipies.slice();
  }

  getRecipe(id: number){
    
    return this.recipies[id];
  }

  addRecipe(recipe: Recipe){    
    this.recipies.push(recipe);
    this.recepiesChanged.next(this.recipies.slice());

    
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipies[index] = recipe;
    this.recepiesChanged.next(this.recipies.slice());
  }


  deleteRecipe(index: number){
    this.recipies.splice(index, 1);
    this.recepiesChanged.next(this.recipies.slice());
  }

  deleteIngredient(index:number, ingredient: number){
    this.recipies[index].ingredients.splice(ingredient,1);
    this.ingredientChanged.next(this.recipies[index].ingredients.slice());
  }
}
