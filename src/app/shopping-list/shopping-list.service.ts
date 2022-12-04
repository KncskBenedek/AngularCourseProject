
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
      ];
      ingredientsChanged = new Subject<Ingredient[]>();
      
      
      newIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      getIngredients(){
        return this.ingredients.slice();
      }

      toShoppingListIngredients(ingredients: Ingredient[]){
        /* ingredients.forEach(newIng => {
            this.newIngredient(newIng);
        }); */

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

}