import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  personajes: string[] = [
    'Jill Valentine',
    'Leon Kennedy',
    'Chris Redfield',
    'Claire Redfield',
  ];

  frutas: string[] = [
    'Manzana',
    'Banana',
    'Naranja'
  ];

  onSelect(ev: number, arrayName: 'personajes' | 'frutas'): void {
    console.log('SELECCIONADO', ev);

    // this[arrayName].splice(ev, 1);

    this[arrayName] = this[arrayName].filter((el, i) => i !== ev)
  }
}
