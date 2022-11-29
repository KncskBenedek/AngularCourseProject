import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() receptDet: Recipe;

  constructor(private slService: ShoppingListService) {}

  toSL(ingredients: Ingredient[]) {
    this.slService.toShoppingListIngredients(ingredients);
  }
}
