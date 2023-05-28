import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent {
  @Input() link!: string;
  @Input() overrideScrollTo?: string;

  scrollTo() {
    if (this.overrideScrollTo === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const scrollToId = this.overrideScrollTo || this.link;

    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get linkText() {
    // break up link by converting pascalCase to spaced words, capitalize first letter
    return this.link.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase();
    });
  }
}
