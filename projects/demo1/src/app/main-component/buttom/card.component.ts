import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-main',
  standalone: true,
  imports: [FormsModule],
  template: `
  <button (click)="onClick(-1)"> - </button>
<span>{{value}}</span>
  <button (click)="onClick(-1)"> - </button>
`,
  styles: ``,
})

export function onClick(value:number){
value=0

  value=+1
}
