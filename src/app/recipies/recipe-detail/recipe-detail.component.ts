import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  //@Input() 
  receptDet: Recipe;
  constructor(private slService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) {}

  toSL(ingredients: Ingredient[]) {
    this.slService.toShoppingListIngredients(ingredients);
  }

  ngOnInit(){
    const id = +this.route.snapshot.params['id'];
    this.receptDet = this.recipeService.getRecipe(id);

    
    this.route.params.subscribe(
      (params: Params)=>
      {
        this.receptDet = this.recipeService.getRecipe( +params['id']);

      }
    );
  }

}
