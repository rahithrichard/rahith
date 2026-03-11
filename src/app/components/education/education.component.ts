import { Component, OnInit } from '@angular/core';
import resume from '../../../assets/data/resume.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = resume.education;
  constructor() {}
  ngOnInit(): void {}
}