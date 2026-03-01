import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TechStackComponent } from '../../../features/home/components/tech-stack/tech-stack.component';
import { ProjectsComponent } from '../../../features/home/components/projects/projects.component';
import { AboutComponent } from '../../../features/home/components/about/about.component';
import { ContactComponent } from '../../../features/home/components/contact/contact.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home',
  imports: [TechStackComponent, ProjectsComponent, AboutComponent, ContactComponent, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  private sectionTitles: { [key: string]: string } = {
    'home': 'Inicio',
    'projects': 'Proyectos',
    'about': 'Sobre mí',
    'contact': 'Contacto'
  };

  constructor(private titleService: Title, private navService: NavigationService) { }

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          this.navService.setActiveSection(sectionId);

          const newTitle = this.sectionTitles[sectionId];

          if (newTitle) {
            this.titleService.setTitle(`Erik Lujan | ${newTitle}`);
          }
        }
      });
    }, options);

    Object.keys(this.sectionTitles).forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        this.observer?.observe(element);
      }
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
