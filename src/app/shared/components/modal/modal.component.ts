import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter<boolean>()

  onClose(): void {
    // this.visible = false;
    this.visibleChange.emit(false);
  }
}
