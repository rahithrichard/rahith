import { Component, OnInit } from '@angular/core';
import resume from '../../../assets/data/resume.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  myservices = resume.myservices;
  services =this.myservices.services;
  selectedItem: any = null;
  selectedSection: string = '';
  constructor() {}
  ngOnInit(): void {}
    openModal(item: any, section: string): void {
    this.selectedItem = item;
    this.selectedSection = section;
  }

  closeModal(): void {
    this.selectedItem = null;
    this.selectedSection = '';
  }

  truncateWords(text: string = '', wordLimit: number = 15): string {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + ' ...';
  }
}