import { Component, Input } from '@angular/core';
import { ImagemComponent } from '../imagem/imagem.component';
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-botao',
  imports: [ImagemComponent, FrasesComponent],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent{
@Input() tipoBotao : string = ""
@Input() textoBotao : string = ""



quebrarBiscoito(){

}



}
