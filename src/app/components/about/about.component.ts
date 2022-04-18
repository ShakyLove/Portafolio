import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills: object[] = [
    { path: "../../../assets/img/skill_icon/html-5.png", skill: "Avanzado" },
    { path: "../../../assets/img/skill_icon/css-3.png", skill: "Intermedio" },
    { path: "../../../assets/img/skill_icon/js.png", skill: "Intermedio" },
    { path: "../../../assets/img/skill_icon/angular-icon-logo.png", skill: "Intermedio/Avanzado" },
    { path: "../../../assets/img/skill_icon/typescript.png", skill: "Intermedio" },
    { path: "../../../assets/img/skill_icon/Laravel.svg.png", skill: "Minimo/Intermedio" },
    { path: "../../../assets/img/skill_icon/php.png", skill: "Intermedio" },
    { path: "../../../assets/img/skill_icon/django-icon-0.jpg", skill: "Minimi/Intermedio" },
    { path: "../../../assets/img/skill_icon/piton.png", skill: "Minimo/Intermedio" },
    { path: "../../../assets/img/skill_icon/mysql.png", skill: "Intermedio" },
    { path: "../../../assets/img/skill_icon/git.png", skill: "Intermedio" },
    { path: "../../../assets/img/skill_icon/docker.png", skill: "Minimo/Intermedio" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
