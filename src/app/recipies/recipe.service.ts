import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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
}
