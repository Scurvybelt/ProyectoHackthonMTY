import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-team-page',
    standalone: true,
    imports: [PageBannerComponent, RouterLink, CtaComponent],
    templateUrl: './team-page.component.html',
    styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {}