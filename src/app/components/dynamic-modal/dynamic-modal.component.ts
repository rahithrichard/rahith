import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.css']
})
export class DynamicModalComponent {
  @Input() item: any | null = null;
  @Input() section: string = 'details';
  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }

  hasImage(): boolean {
    return Boolean(this.item && (this.item.image || this.item.icon1 || this.item.icon));
  }

  getTitle(): string {
    if (!this.item) {
      return 'Details';
    }
    return this.item.name || this.item.degree || this.item.role || this.item.institution || 'Details';
  }

  getBody(): string {
    if (!this.item) {
      return '';
    }
    return this.item.description || this.item.duration || this.item.institution || '';
  }
}
