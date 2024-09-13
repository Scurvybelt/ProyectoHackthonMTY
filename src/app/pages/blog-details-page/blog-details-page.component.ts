import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { RouterLink } from '@angular/router';
import { WidgetSidebarComponent } from '../../common/widget-sidebar/widget-sidebar.component';

@Component({
    selector: 'app-blog-details-page',
    standalone: true,
    imports: [PageBannerComponent, WidgetSidebarComponent, CtaComponent, RouterLink],
    templateUrl: './blog-details-page.component.html',
    styleUrl: './blog-details-page.component.scss'
})
export class BlogDetailsPageComponent {}