import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    routeIndex: number;
    routes: string[] = ['recipies', 'shoppingList'];

    @Output() routeOut = new EventEmitter<string>();

    constructor(){
        this.routeIndex = 0;
    }

    onRouteValt(index: number){
        this.routeIndex = index;
        
        
        this.routeOut.emit(this.routes[this.routeIndex]);
    }
}