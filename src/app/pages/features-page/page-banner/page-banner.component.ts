import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-banner',
    standalone: true,
    imports: [RouterLink, NgStyle],
    templateUrl: './page-banner.component.html',
    styleUrl: './page-banner.component.scss'
})
export class PageBannerComponent {

    // BG Image Scroll
    backgroundPositionY = 0;
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const scrollY = window.scrollY;
        this.backgroundPositionY = scrollY * 0.5; // Adjust the multiplier to control the speed of the parallax effect
    }

}