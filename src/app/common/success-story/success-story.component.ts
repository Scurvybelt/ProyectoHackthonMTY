import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-success-story',
    standalone: true,
    imports: [RouterLink, CarouselModule, NgIf],
    templateUrl: './success-story.component.html',
    styleUrl: './success-story.component.scss'
})
export class SuccessStoryComponent {

    // Owl Carousel
    successStorySlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
		]
    }

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}