import { Component } from '@angular/core';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { BlogComponent } from './blog/blog.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { FeaturesComponent } from './features/features.component';
import { SecurityComponent } from '../../common/security/security.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { FlexibilityComponent } from '../../common/flexibility/flexibility.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { BannerComponent } from './banner/banner.component';

@Component({
    selector: 'app-social-finance-agency',
    standalone: true,
    imports: [BannerComponent, PartnersComponent, AboutComponent, FlexibilityComponent, FunfactsComponent, SecurityComponent, FeaturesComponent, FeedbackComponent, BlogComponent, SubscribeComponent],
    templateUrl: './social-finance-agency.component.html',
    styleUrl: './social-finance-agency.component.scss'
})
export class SocialFinanceAgencyComponent {}