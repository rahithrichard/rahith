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
}