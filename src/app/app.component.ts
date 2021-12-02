import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'View All Stocks', url: '/folder/viewer/all', icon: 'eye-outline' }
  ];
  constructor() {}
}
