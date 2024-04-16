import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  book = {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
    isbn: '978-0596001077',
    published: new Date(2002, 10, 10),
  }

  name: string = 'Ana';
  enabledButton = true;
  statusBotao = 'Habilitado';
  randomText = 'Valor inicial';

  onClickButton() {
    this.enabledButton = !this.enabledButton;
    this.statusBotao = this.enabledButton ? 'Habilitado' : 'Desabilitado';
    console.log(this.enabledButton);
    this.randomText = this.statusBotao;
  }

  onEditText(event: Event): void {
    console.log((event.target as HTMLInputElement).value);
  }

  onEditNgModel(): void { 
    console.log(this.randomText)
  }

  onSave() : void {
    alert(JSON.stringify(this.book));
  }
}
