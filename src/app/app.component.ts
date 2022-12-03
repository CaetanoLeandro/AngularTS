import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userData = {
    email: 'leandro@hotmail.com',
    role: 'Admin'
  };

  public userName = 'Caetano';

  title = 'curso-angular';

}
