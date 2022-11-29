import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
      ];
      ingredientsChanged = new EventEmitter<Ingredient[]>();
      
      
      newIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      getIngredients(){
        return this.ingredients.slice();
      }

      toShoppingListIngredients(ingredients: Ingredient[]){
        /* ingredients.forEach(newIng => {
            this.newIngredient(newIng);
        }); */

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

}