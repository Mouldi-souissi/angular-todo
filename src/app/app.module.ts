import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodosListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
