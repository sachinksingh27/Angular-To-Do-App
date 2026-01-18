import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './to-do/to-do';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-To-Do-App');
}
