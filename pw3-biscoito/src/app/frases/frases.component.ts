import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent implements OnInit{
frases = [
  "Deixe de lado as preocupações e seja feliz", 
  "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre",
  "Conhecimento é a única virtude e ignorância é o único vício",
  "Sem o fogo do entusiasmo, não há o calor da vitória",
  " Não provoque a luta, aceite-a. É melhor recuar um metro do que avançar um centímetro",
  "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "Quem olha para fora sonha, quem olha para dentro acorda.",
  "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração."]

frase = ''
index = 0

ngOnInit(){
    this.fraseAleatoria()
}


fraseAleatoria(){
  this.index = Math.round(Math.random()*10)
  this.frase = this.frases[this.index] 

}


}
