import { Component } from '@angular/core';
import { PersonUtilsService } from './services/person/person.Utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';

  constructor(public personUtilsService:PersonUtilsService){
    this.personUtilsService.auth();

    
  }
}
