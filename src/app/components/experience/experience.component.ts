import { Component, OnInit } from '@angular/core';
import resume from '../../../assets/data/resume.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience = resume.experience;
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
}