import { Component, OnDestroy, OnInit, ViewChild, /* ElementRef, EventEmitter, Output, ViewChild */ } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
/*   @ViewChild('ingredientInput', {static:true}) ingredientInput: ElementRef;
  @ViewChild('amountInput', {static:true}) amountInput:ElementRef; */
 /*  @Output() editOut = new EventEmitter<Ingredient>(); */
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('form', {static: false}) slForm: NgForm;
  constructor(private slService: ShoppingListService){

  }
  myFunction(form: NgForm){
    const value = form.value;
    const newIng: Ingredient = new Ingredient(value.name, value.amount);
    console.log(newIng);

    
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIng);
    }
    else{
      this.slService.newIngredient(newIng);
    }
    this.onReset();
    
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
        .subscribe(
          (index: number)=>{
            this.editMode = true;
            this.editedItemIndex = index;
            this.editedItem = this.slService.getIngredient(index);
            this.slForm.setValue(
              {
                name: this.editedItem.name,
                amount: this.editedItem.amount
              }
            )
          }

        );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onReset() {
    this.slForm.reset();
    this.editMode = false;
  }

    onDelete(){
      this.slService.deleteIngredient(this.editedItemIndex);
      this.onReset();
    }

}


