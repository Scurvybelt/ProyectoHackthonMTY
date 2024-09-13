import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { CompareWithOthersComponent } from '../../common/compare-with-others/compare-with-others.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { EasyPaymentComponent } from '../../common/easy-payment/easy-payment.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { ReadyToTalkComponent } from '../../common/ready-to-talk/ready-to-talk.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { ServicesComponent } from '../../common/services/services.component';
import { BoxesComponent } from '../../common/boxes/boxes.component';

@Component({
    selector: 'app-banking-payment-processing',
    standalone: true,
    imports: [BannerComponent, BoxesComponent, ServicesComponent, CompareWithOthersComponent, FeaturesComponent, EasyPaymentComponent, FunfactsComponent, TestimonialsComponent, ReadyToTalkComponent, DownloadAppComponent, CtaComponent],
    templateUrl: './banking-payment-processing.component.html',
    styleUrl: './banking-payment-processing.component.scss'
})
export class BankingPaymentProcessingComponent {}