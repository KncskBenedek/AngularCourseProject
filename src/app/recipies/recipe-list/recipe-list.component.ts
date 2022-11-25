import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Input() itemKattintva: Recipe;
  @Output() itemLeAd = new EventEmitter<Recipe>();
  recipies: Recipe[] = [
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
  onItemChanged(recept: Recipe){
    this.itemLeAd.emit(recept);
  }
}
