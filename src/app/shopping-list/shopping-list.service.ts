
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
      ];
      ingredientsChanged = new Subject<Ingredient[]>();
      startedEditing = new Subject<number>();
      
      newIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      getIngredients(){
        return this.ingredients.slice();
      }

      toShoppingListIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      getIngredient(index: number){
        return this.ingredients[index]; 
      }

      updateIngredient(index: number, newIng: Ingredient){
        this.ingredients[index] = newIng;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

}