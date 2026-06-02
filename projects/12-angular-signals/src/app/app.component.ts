import { Component, computed, signal } from '@angular/core';
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

// Lazy loading helps keep initial bundle sizes smaller

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    <p>
      Completed todos: {{ completed() }}
      @for (todo of todos(); track todo.id) {
        <label
          [ngStyle]="{
            'text-decoration': todo.completed ? 'line-through' : 'none',
          }"
        >
          <input
            type="checkbox"
            [checked]="todo.completed"
            (change)="updateTodo(todo)"
          />
          {{ todo.title }}
        </label>
      }
    </p>
  `,
  styles: `
    label {
      display: block;
    }
  `,
})
export class AppComponent {
  completed = computed(
    () => this.todos().filter((todo) => todo.completed).length,
  );

  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ]);

  updateTodo(todo: Todo) {
    this.todos.update((oldTodos) =>
      oldTodos.map((todoEntry) =>
        todoEntry.id === todo.id
          ? { ...todoEntry, completed: !todoEntry.completed }
          : todoEntry,
      ),
    );
  }
}
