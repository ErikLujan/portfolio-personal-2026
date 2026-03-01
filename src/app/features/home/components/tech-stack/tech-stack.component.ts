import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  technologies = [
    { name: 'Angular', icon: 'assets/images/tech/angular.png' },
    { name: 'TypeScript', icon: 'assets/images/tech/typescript.png' },
    { name: 'JavaScript', icon: 'assets/images/tech/javascript.png' },
    { name: 'HTML5', icon: 'assets/images/tech/html5.png' },
    { name: 'CSS3', icon: 'assets/images/tech/css3.png' },
    { name: 'Python', icon: 'assets/images/tech/python.png' },
    { name: 'Git', icon: 'assets/images/tech/git.png' },
    { name: 'GitHub', icon: 'assets/images/tech/github.png' },
  ]
}
