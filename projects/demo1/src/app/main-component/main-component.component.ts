import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'isdi-main',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  template: `<isdi-header></isdi-header>`,
  styles: ``,
})
export class MainComponent {}
