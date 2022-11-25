import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  melyik: string = 'recipies';

  routeValt(event: string){
    if(this.melyik != event.valueOf()){
      this.melyik = event.valueOf();
      
      
    }
    
    
  }
}
