import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuItems = [
    {
      icon: 'calculator',
      label: 'RPE calculator',
      path: ''
    },
    {
      icon: 'settings',
      label: 'RPE charts',
      path: 'customize'
    },
]
  constructor() {}
}
