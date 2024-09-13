import { Component } from '@angular/core';
import { CtaComponent } from '../../common/cta/cta.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { ReadyToTalkComponent } from '../../common/ready-to-talk/ready-to-talk.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { EasyPaymentComponent } from '../../common/easy-payment/easy-payment.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { CompareWithOthersComponent } from '../../common/compare-with-others/compare-with-others.component';
import { ServicesComponent } from '../../common/services/services.component';
import { BoxesComponent } from '../../common/boxes/boxes.component';
import { BannerComponent } from './banner/banner.component';

@Component({
    selector: 'app-bankers-entrepreneurs',
    standalone: true,
    imports: [CtaComponent, DownloadAppComponent, ReadyToTalkComponent, TestimonialsComponent, FunfactsComponent, EasyPaymentComponent, FeaturesComponent, CompareWithOthersComponent, ServicesComponent, BoxesComponent, BannerComponent],
    templateUrl: './bankers-entrepreneurs.component.html',
    styleUrl: './bankers-entrepreneurs.component.scss'
})
export class BankersEntrepreneursComponent {}