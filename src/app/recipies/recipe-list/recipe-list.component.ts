import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnDestroy{
  //@Input() itemKattintva: Recipe;
  recipies: Recipe[] = [];
  subRecChanged: Subscription;
  constructor(private recipeService: RecipeService){

  }
  ngOnInit(){
    this.recipies = this.recipeService.getRecipies();
    this.subRecChanged  = this.recipeService.recepiesChanged.subscribe(
      (recipies: Recipe[])=>{
        this.recipies = recipies;
      }
    );
  }
  ngOnDestroy(): void {
    this.subRecChanged.unsubscribe()
  }
}
