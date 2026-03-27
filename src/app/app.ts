import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyTodo } from './mytodo/mytodo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyTodo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
