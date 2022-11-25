import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent {
  toDetRec: Recipe;
  onGetNewItem(event: Recipe){
    this.toDetRec = event;
  }
}
