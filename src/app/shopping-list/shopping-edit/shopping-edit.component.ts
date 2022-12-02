import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('ingredientInput', {static:true}) ingredientInput: ElementRef;
  @ViewChild('amountInput', {static:true}) amountInput:ElementRef;
 /*  @Output() editOut = new EventEmitter<Ingredient>(); */
  constructor(private slService: ShoppingListService){

  }
  myFunction(){
    const newIngredient: Ingredient = new Ingredient(this.ingredientInput.nativeElement.value, this.amountInput.nativeElement.value);

    
    //this.editOut.emit(newIngredient);
    this.slService.newIngredient(newIngredient);
    
  }
}
