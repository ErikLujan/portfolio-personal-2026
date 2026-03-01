import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeSection = signal<string>('home');

  setActiveSection(sectionId: string) {
    this.activeSection.set(sectionId);
  }
}
