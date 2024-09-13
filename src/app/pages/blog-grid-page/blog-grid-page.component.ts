import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';

@Component({
    selector: 'app-blog-grid-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, CtaComponent],
    templateUrl: './blog-grid-page.component.html',
    styleUrl: './blog-grid-page.component.scss'
})
export class BlogGridPageComponent {}