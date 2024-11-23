import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgClass,CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    // Navbar Sticky
    isSticky: boolean = false;
    logeado: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    constructor(
        public router: Router
    ) { }

    ngOnInit(){
        if(typeof window !== 'undefined'){
            if(localStorage.getItem('user')){
                this.logeado = true;
            }
        }
        
    }

    // Mean Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    logOut(){4 
        if(typeof window !== 'undefined'){
            localStorage.removeItem('user');
            location.reload();
        }
        
    }

}