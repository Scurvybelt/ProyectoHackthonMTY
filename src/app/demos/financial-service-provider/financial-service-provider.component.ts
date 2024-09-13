import { Component } from '@angular/core';
import { GetStartedComponent } from '../../common/get-started/get-started.component';
import { ReviewsComponent } from '../../common/reviews/reviews.component';
import { SuccessStoryComponent } from '../../common/success-story/success-story.component';
import { TrustedWorldComponent } from '../../common/trusted-world/trusted-world.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { BannerComponent } from './banner/banner.component';
import { PaymentExperiencesComponent } from './payment-experiences/payment-experiences.component';
import { AboutComponent } from "../../common/about/about.component";
import { ServicesComponent } from './services/services.component';
import { GrowYourBusinessComponent } from './grow-your-business/grow-your-business.component';

@Component({
    selector: 'app-financial-service-provider',
    standalone: true,
    imports: [BannerComponent, PartnersComponent, PaymentExperiencesComponent, ReviewsComponent, SuccessStoryComponent, TrustedWorldComponent, GetStartedComponent, AboutComponent, GrowYourBusinessComponent, ServicesComponent],
    templateUrl: './financial-service-provider.component.html',
    styleUrl: './financial-service-provider.component.scss'
})
export class FinancialServiceProviderComponent {}