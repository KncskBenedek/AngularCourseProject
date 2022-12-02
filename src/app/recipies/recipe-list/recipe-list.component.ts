import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent {
  //@Input() itemKattintva: Recipe;
  recipies: Recipe[] = [];

  constructor(private recipeService: RecipeService){

  }
  ngOnInit(){
    this.recipies = this.recipeService.getRecipies();
  }

}
