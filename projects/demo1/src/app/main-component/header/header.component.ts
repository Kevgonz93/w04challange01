import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [FormsModule],
  template: ` <header class="main-header">
    <h1 class="main-title">The pointing gentlemen</h1>
  </header>`,
  styles: ``,
})
export class HeaderComponent {}
