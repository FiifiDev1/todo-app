import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes }from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task
  faTimes = faTimes

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log('tes')
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task){
    console.log('toggle')
    this.onToggleReminder.emit(task)
  }
}
