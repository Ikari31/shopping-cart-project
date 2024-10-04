import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Para suportar forms reativos
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { ItemGroupsComponent } from './item-groups/item-groups.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent, 
    ItemListComponent,
    ItemGroupsComponent  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Componente principal da aplicação
})
export class AppModule {}
