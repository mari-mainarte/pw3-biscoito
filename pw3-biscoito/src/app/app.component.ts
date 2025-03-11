import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagemComponent } from './imagem/imagem.component';
import { FrasesComponent } from './frases/frases.component';
import { BiscoitoComponent } from './biscoito/biscoito.component';

@Component({
  selector: 'app-root',
  imports: [ ImagemComponent, FrasesComponent, BiscoitoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-biscoito';
}
