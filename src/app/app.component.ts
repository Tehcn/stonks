import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Current Prices', url: '/viewer/current', icon: 'cash' },
    { title: 'All Stocks', url: '/viewer/all', icon: 'grid' }
  ];
  constructor() { }
}
