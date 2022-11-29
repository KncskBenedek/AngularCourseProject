import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipies: Recipe[] = [
    new Recipe(
      'kalács',
      'ez egy kalács',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/%C5%A0akotis_3799.jpg'
    ),
    new Recipe(
      'kalács2',
      'ez egy  második kalács',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/%C5%A0akotis_3799.jpg'
    ),
  ];

  getRecipies() {
    return this.recipies.slice();
  }
}
