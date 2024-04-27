import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindComponent } from './data-bind/data-bind.component';
import { StudentsComponent } from './students/students.component';
import { ItemsChildComponent } from './items-child/items-child.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { GramasTransformPipe } from './gramas-transform.pipe';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

registerLocaleData(ptBr);

@NgModule({
  // declaração de todos os componentes, pipes, etc
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MySecondComponentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DataBindComponent,
    StudentsComponent,
    ItemsChildComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    NotFoundComponent,
    UserComponent,
    GramasTransformPipe,
    UserDetailComponent,
    UserCreateComponent
  ],
  // o array imports permite que outros módulos sejam importados no AppModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
