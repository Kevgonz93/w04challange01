import { style } from '@angular/animations';
import { Component, isStandalone } from '@angular/core';
import { FormsModule, input} from '@angular/forms';

@Component({
  selector:'',
  standalone:true,
  imports: [FormsModule],
  template:`

  id: string;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;

  selected: true;`,

  styles:``,
})


export const DataComponent =
parentData: any=[{
    id: 1,
    name: 'Bertin Osborne',
    status: 'Alive',
    profession: 'Youtuber',
    twitter: '@osbourne',
    picture: 'bertin.jpg',
    alternativeText: 'Osbourne pointing at you',
    selected: true,
  },
  {
    name: 'The Farytale',
    status: 'RIP',
    profession: 'Influencer',
    twitter: 'pending',
    picture: 'fary.jpg',
    alternativeText: 'The Fary pointing at you',
    id: 2,
    selected: false,
  },
  {
    id: 3,
    name: 'Julius Churchs',
    status: 'Alive',
    profession: 'Java developer',
    twitter: '@julius_churchs',
    picture: 'julio.jpg',
    alternativeText: 'Churchs pointing at you',
    selected: true,
  };
];
