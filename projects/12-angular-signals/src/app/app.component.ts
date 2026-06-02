import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

// Before signals, Angualar used zones for change detection

// 3 reactive primities: signal, computed, effect
// Based on memoization and caching strategies

// signal: a value that can tell Angular when it changes - capable of notifying 
// its context of future changes in its value

// computed: derive new value when one of the dependent signals change

// effect: is a side-effectful operation which reads 
// the value of zero or more signals
// make something happen when one of the signals changes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>Building a TODO List</h1> `,
  styles: `label { display: block }`,
})
export class AppComponent {
  updateTodo(todo: Todo) {}
}
