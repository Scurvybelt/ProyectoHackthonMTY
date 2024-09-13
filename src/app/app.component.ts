import { Component } from '@angular/core';
import { CommonModule, NgClass, ViewportScroller } from '@angular/common';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
import { BackToTopComponent } from './common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent, BackToTopComponent, NgClass],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    title = 'Klob - Banking & Online Payment Processing Angular 18 Template';

    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                // Scroll to the top after each navigation end
                this.viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }

}