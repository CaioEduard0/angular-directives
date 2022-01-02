import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.css']
})
export class DirectiveNgifComponent implements OnInit {

  courses: string[] = ["Angular"];
  showCourses: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowCourses() {
    this.showCourses = !this.showCourses;
  }

}
