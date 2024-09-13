import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { WidgetSidebarComponent } from '../../common/widget-sidebar/widget-sidebar.component';

@Component({
    selector: 'app-blog-right-sidebar-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, CtaComponent, WidgetSidebarComponent],
    templateUrl: './blog-right-sidebar-page.component.html',
    styleUrl: './blog-right-sidebar-page.component.scss'
})
export class BlogRightSidebarPageComponent {}