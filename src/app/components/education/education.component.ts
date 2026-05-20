import { Component, OnInit } from '@angular/core';
import resume from '../../../assets/data/resume.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = resume.education;
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