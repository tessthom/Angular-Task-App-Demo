import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  // Inject the task service into the constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Subscribe to the observable
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      // This is a way to filter out the task that was deleted from the UI
      .subscribe(
        () => (this.tasks = this.tasks.filter(t => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    // Toggle the reminder
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    // Add the task to our fake API server
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
