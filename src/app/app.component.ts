import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Tasks', url: 'tasks', icon: 'book' },
    { title: 'Task Calls', url: 'task-calls', icon: 'folder-open' },
  ];
  constructor() {}
}
