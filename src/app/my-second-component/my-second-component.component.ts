import { Component } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.css']
})
export class MySecondComponentComponent {

  showSuccessMessage = false;

  name = "Fulano";

  items = ["Fulano", "Ciclano", "Outro", "Mais um" ];

  value = 11;

}
