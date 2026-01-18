import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo {
  inputText: string = '';
  toDoItems: string[] = [];

  addTask(): void {
    if (this.inputText.trim()) {
      this.toDoItems.push(this.inputText.trim());
      this.inputText = '';
    }
  }
  deleteTask(index: number): void {
    this.toDoItems.splice(index, 1);
  }

}
