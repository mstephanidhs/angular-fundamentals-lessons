import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  // the name of the html tag that will be used to render this component
  selector: 'app-root',
  // this component is standalone, meaning it does not depend on any other components
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // the template is the html that will be rendered when this component is used
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>ETA - NewJeans</li>
      <li>Ready Player One -</li>
      <li>Dogeball</li>
    </ol>
  `,
  // the styles are the css that will be applied to the html when this component is used
  // there are scoped styles, meaning they will only apply to this component
  styles: `
    ol {
      list-style-type: upper-roman;
    }
  `,
})
export class AppComponent {}
