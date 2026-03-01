import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  private navService = inject(NavigationService);
  
  activeSection = this.navService.activeSection;

  items = [
    { name: 'Inicio', link: '#home', id: 'home' },
    { name: 'Proyectos', link: '#projects', id: 'projects' },
    { name: 'Sobre mí', link: '#about', id: 'about' },
    { name: 'Contacto', link: '#contact', id: 'contact' },
  ];

  toggleMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }
  
  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }
}