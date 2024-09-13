import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';

@Component({
    selector: 'app-contact-page-two',
    standalone: true,
    imports: [PageBannerComponent],
    templateUrl: './contact-page-two.component.html',
    styleUrl: './contact-page-two.component.scss'
})
export class ContactPageTwoComponent {}