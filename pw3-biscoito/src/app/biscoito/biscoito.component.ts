import { Component, Input } from '@angular/core';
import { BotaoComponent } from "../botao/botao.component";
import { ImagemComponent } from "../imagem/imagem.component";
import { FrasesComponent } from "../frases/frases.component";

@Component({
  selector: 'app-biscoito',
  imports: [BotaoComponent, ImagemComponent, FrasesComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  @Input() statusBiscoito : boolean = true

  imagem = "biscoito-aberto.png";

}
