import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  nomeEmpresa = "Nome da empresa";
  enabledButton = false;

  onEditText(event: Event): void {
    if ((event.target as HTMLInputElement).value.length >= 3) {
      this.enabledButton = true;
    } else {
      this.enabledButton = false;
    }
  }

}
