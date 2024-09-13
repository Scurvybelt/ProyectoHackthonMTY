import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { RouterLink } from '@angular/router';
import { CtaComponent } from '../../common/cta/cta.component';

@Component({
    selector: 'app-contact-page-one',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, CtaComponent],
    templateUrl: './contact-page-one.component.html',
    styleUrl: './contact-page-one.component.scss'
})
export class ContactPageOneComponent {}