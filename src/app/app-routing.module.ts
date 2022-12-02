import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipies/recipe-detail/recipe-detail.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { SelectRecipeComponent } from "./recipies/select-recipe/select-recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipies', pathMatch: "full" },
    { path: 'recipies', component: RecipiesComponent, children: [
        { path: '', component: SelectRecipeComponent }
        ,{ path: ':id', component: RecipeDetailComponent }
        ] 
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '**', component: RecipiesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }