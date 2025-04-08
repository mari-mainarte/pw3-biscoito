import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent{
  @Input() quebrar : boolean = true;

  biscoito : string = 'biscoito.png';
  biscoitoQuebrado : string = 'biscoito-aberto.png';

}
