import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  imports: [],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  @Input() statusBiscoito : boolean = true
}
