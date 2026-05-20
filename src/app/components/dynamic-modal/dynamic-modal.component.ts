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

    switch (this.section) {
      case 'services':
        return this.getServiceBody();
      case 'projects':
        return this.item.description || '';
      case 'experience':
        return `${this.item.company} - ${this.item.duration}\n\n${this.item.description}`;
      case 'education':
        return `${this.item.institution} - ${this.item.duration}`;
      default:
        return this.item.description || this.item.duration || this.item.institution || '';
    }
  }

  private getServiceBody(): string {
    const parts = [];
    if (this.item.Overview) parts.push(`Overview: ${this.item.Overview}`);
    if (this.item['My Approach']) parts.push(`My Approach: ${this.item['My Approach']}`);
    if (this.item['I prioritize']) parts.push(`I prioritize: ${this.item['I prioritize']}`);
    if (this.item['I ensure']) parts.push(`I ensure: ${this.item['I ensure']}`);
    if (this.item['My design philosophy includes']) parts.push(`My design philosophy includes: ${this.item['My design philosophy includes']}`);
    if (this.item['My development philosophy includes']) parts.push(`My development philosophy includes: ${this.item['My development philosophy includes']}`);
    if (this.item['Key Elements']) parts.push(`Key Elements: ${this.item['Key Elements']}`);
    if (this.item['Tools & Technologies']) parts.push(`Tools & Technologies: ${this.item['Tools & Technologies']}`);
    if (this.item.Experience) parts.push(`Experience: ${this.item.Experience}`);
    return parts.join('\n\n');
  }
}
