import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';


@NgModule({
  // declaração de todos os componentes, pipes, etc
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MySecondComponentComponent
  ],
  // o array imports permite que outros módulos sejam importados no AppModule
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
