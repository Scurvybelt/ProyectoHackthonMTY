import { Component } from '@angular/core';
import { CtaComponent } from '../../common/cta/cta.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { ReadyToTalkComponent } from '../../common/ready-to-talk/ready-to-talk.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { EasyPaymentComponent } from '../../common/easy-payment/easy-payment.component';
import { FeaturesComponent } from './features/features.component';
import { CompareWithOthersComponent } from '../../common/compare-with-others/compare-with-others.component';
import { ServicesComponent } from './services/services.component';
import { HowKlobWorksComponent } from './how-klob-works/how-klob-works.component';
import { BannerComponent } from './banner/banner.component';
import { BoxesComponent } from '../../common/boxes/boxes.component';

@Component({
    selector: 'app-loan-providers',
    standalone: true,
    imports: [BannerComponent, BoxesComponent, HowKlobWorksComponent, ServicesComponent, CompareWithOthersComponent, FeaturesComponent, EasyPaymentComponent, FunfactsComponent, TestimonialsComponent, ReadyToTalkComponent, DownloadAppComponent, BlogComponent, CtaComponent],
    templateUrl: './loan-providers.component.html',
    styleUrl: './loan-providers.component.scss'
})
export class LoanProvidersComponent {}