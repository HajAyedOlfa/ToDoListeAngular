import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ajouter ce code 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; // ce component est importer automatiquement lors de son création

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent // ce component est ajouter automatiquement lors de son création
  ],
  imports: [
    BrowserModule,
    FormsModule, //ajouter ce code
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
