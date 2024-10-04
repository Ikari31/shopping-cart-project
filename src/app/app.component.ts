import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './item.model';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemGroupsComponent } from './item-groups/item-groups.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddItemComponent, ItemListComponent, ItemGroupsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'shopping-cart-project';

  items: Item[] = [];

  onAddItem(newItem: string){
    const product = {
      id: this.items.length + 1,
      productName: newItem,
      isBought: false,
      isEditing: false
    }

    this.items.push(product)
  }

  onRemoveItem(item: Item){
    this.items = this.items.filter(product => product.id !== item.id)
  }

  handleEditItem(updatedItem: Item) {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem; 
    }
  }

  handleToggleBought(item: Item) {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }

}
