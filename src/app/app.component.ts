import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { Matche } from './matche';
var isValid
var image ='data:image/jpeg;base64,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'

var imageLogo ='https://www.google.fr/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwim7PObhazcAhVFUlAKHbuLCjEQjRx6BAgBEAU&url=https%3A%2F%2Ffr.wikiversity.org%2Fwiki%2FJeux_d%2527allumettes%2FJeu_de_Marienbad&psig=AOvVaw0DIsWbOCGw24Ye4EJv_VRF&ust=1532119795901197'


@Component({
  selector: 'app-root',
  template: `
  <div align="center"><span style="font-weight:bold; color:blue"><h1>{{title}}</h1></span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Pyramidal_matches.svg/1200px-Pyramidal_matches.svg.png' style="height:80px"> </div>
  <h1>{{display}}</h1>
  <div align="center"><span style="font-weight:bold; color:grey"><h3>Règle : Celui qui a la dernière allumette gagne la partie !</h3></span></div>

  <p>Heroes:</p>

  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
    <table>
        <td  *ngFor="let matche of matches">
            <a href="{{matche.heroImageUrl}}">   <img src="{{matche.heroImageUrl}}" style="height:80px">  </a>
        </td>

    </table>

<div class="form-group" *ngIf="matches.length > 1">
   <label>Combien d'allumettes souhaitez-vous enlever?</label>
   <div class="form-control">
       <input type="radio" name="rad2" (click)= "changeValue(2)"> 2
       <input type="radio" name="rad2" (click)= "changeValue(3)"> 3
   </div>
</div>



  <ul>
   <li *ngFor="let move of moves">{{move}}</li>
  </ul>

`
})
export class AppComponent {
  title = 'Bienvenue au Matches Game';
  matches:Match[] = [];
  moves=[]
  heroes = [
    new Hero(1,'Avatar'),
    new Hero(13,'Jimmy'),
    new Hero(15,'Mbappe'),
    new Hero(20,'Agassy')
  ];
  myHero = this.heroes[0];

ngOnInit() {
  for (var i=1; i<18; i++) {
    this.matches.push(new Matche(i, 'mt'+i,image));
  }
}

  play(who,nb):Boolean {
    this.matches.splice(0,nb);
    this.moves.push(who+" a choisi " + nb);
    if(this.matches.length <=1) {
      alert(who + " a gagné");
      return false;
    }
    return true;
  }
  changeValue(nb): void {
  if(this.play(this.myHero.name, nb)) {
    var cnb = Math.floor(Math.random() * 3) + 2;
    this.play("Computer",cnb);
  }

 };

}
