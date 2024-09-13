import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partners',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.scss'
})
export class PartnersComponent {

    // Owl Carousel
    partnersSlides: OwlOptions = {
		nav: false,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 5
			}
		}
    }

}