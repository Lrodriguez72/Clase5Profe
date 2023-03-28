import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectableListComponent } from 'src/app/shared/components/selectable-list/selectable-list.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  modalVisible = false;


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

  @ViewChild('myListOfPersonajes')
  selectableListOfPersonajes?: SelectableListComponent;

  @ViewChild('myListOfFrutas')
  selectableListOfFrutas?: SelectableListComponent;

  @ViewChild('myDiv')
  myDivRef?: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    // console.log('ON INIT', this.selectableListOfPersonajes);
  }

  ngAfterViewInit(): void {
    console.log('VIEW INIT', this.selectableListOfPersonajes?.items);
    console.log('VIEW INIT', this.selectableListOfFrutas?.items);

    // console.log(this.myDivRef?.nativeElement);
  }

  onSelect(ev: number, arrayName: 'personajes' | 'frutas'): void {
    // this[arrayName].splice(ev, 1);
    this[arrayName] = this[arrayName].filter((el, i) => i !== ev)
  }
}
