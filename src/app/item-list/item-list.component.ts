import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() items: Item[] = [];
  @Output() removeItemEvent = new EventEmitter<Item>();
  @Output() editItemEvent = new EventEmitter<Item>();

  toggleBought(item: Item){
    item.isBought = !item.isBought
  }

  removeItem(item: Item){
    this.removeItemEvent.emit(item);
  }

  editItem(item: Item) {
    item.isEditing = true;  
  }

  
  saveItem(item: Item) {
    item.isEditing = false;  
    this.editItemEvent.emit(item);  
  }

  
  cancelEdit(item: Item) {
    item.isEditing = false;  
  }
}
