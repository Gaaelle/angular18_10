import { Component } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  // styleUrls: ['./twitter.component.css'] //Si on a un fichier css
  styles: [`
    textarea {
      color: #002177;
      font-family: verdana;
      font-size: 20px;
    }
    .textColor {
      color:#8b0000;
    }
    .anotherClass {
      font-size:15px;
    }
  `] //attention au quotes, c'est des backtits (touche 7 du clavier)

})

export class TwitterComponent {
  maxLength = 140;
  monTextArea = 'Bonjour';
  txt = "";
  changeColor = ""

}
