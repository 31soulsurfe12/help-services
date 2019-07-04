import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CadastroclienteComponent } from './cadastrocliente/cadastrocliente.component';
import { CadastroprestadorComponent } from './cadastrocliente/cadastroprestador/cadastroprestador.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroclienteComponent,
    CadastroprestadorComponent,
    PaginainicialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
