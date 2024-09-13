import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink, NgStyle],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    // BG Image Scroll
    backgroundPositionY = 0;
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const scrollY = window.scrollY;
        this.backgroundPositionY = scrollY * 0.5; // Adjust the multiplier to control the speed of the parallax effect
    }

}