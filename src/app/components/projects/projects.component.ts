import { Component, OnInit } from '@angular/core';
import resume from '../../../assets/data/resume.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = resume.projects;
  works = this.projects.works;
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