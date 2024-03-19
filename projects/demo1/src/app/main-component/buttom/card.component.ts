import { Component } from '@angular/core';
import { FormsModule, input } from '@angular/forms';

@Component({
  selector: 'isdi-card',
  standalone: true,
  imports: [FormsModule],
  template: `<li class="gentleman">
        <div class="gentleman__avatar-container">
          <img
            [ngSrc]="picture"
            alt="The Fary pointing at you"
          />
          <span class="gentleman__initial">F</span>
        </div>
        <div class="gentleman__data-container">
          <h2> {{name}} </h2>
          <ul class="gentleman__data-list">
            <li class="gentleman__data">
              <span class="gentleman__data-label">Profession:</span>
              {{ profession }}
            </li>
            <li class="gentleman__data">
              <span class="gentleman__data-label">Status:</span> {{status}}
            </li>
            <li class="gentleman__data">
              <span class="gentleman__data-label">Twitter:</span> {{twitter}}
            </li>
          </ul>
        </div>
        <i class="icon gentleman__icon fas fa-check"></i>
        <i
          class="icon gentleman__icon gentleman__icon--delete fas fa-times"
        ></i>
      </li>`,
  styles: ``,
})

export const gentlemans =
  {
    id: 1,
    name: 'Bertin Osborne',
    status: 'Alive',
    profession: 'Youtuber',
    twitter: '@osbourne',
    picture: 'bertin.jpg',
    alternativeText: 'Osbourne pointing at you',
    selected: true,
  }
