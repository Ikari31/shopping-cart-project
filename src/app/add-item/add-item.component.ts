import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import {ReactiveFormsModule, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  newItem = new FormControl('', [Validators.required]);

  @Output() addItemEvent = new EventEmitter<string>();
  
  addItem() {
    if (this.newItem.valid) {
      this.addItemEvent.emit(this.newItem.value ?? '');
      this.newItem.reset();
    }
  }
}
