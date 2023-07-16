import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  // Added the ! because I was getting an error when I copied Brad's code. ! is a non-null assertion operator and tells Angular that the variable won't be null or undefined. Unsure why it didn't work without, because we are importing the Task interface. 
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { };

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | undefined) {
    this.onToggleReminder.emit(task);
  }
}
