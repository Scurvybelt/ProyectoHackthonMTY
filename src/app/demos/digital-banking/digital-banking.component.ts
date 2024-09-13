import { Component } from '@angular/core';
import { CtaComponent } from '../../common/cta/cta.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { ReadyToTalkComponent } from '../../common/ready-to-talk/ready-to-talk.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { EasyPaymentComponent } from '../../common/easy-payment/easy-payment.component';
import { ServicesComponent } from './services/services.component';
import { InformationComponent } from './information/information.component';
import { BannerComponent } from './banner/banner.component';

@Component({
    selector: 'app-digital-banking',
    standalone: true,
    imports: [BannerComponent, InformationComponent, ServicesComponent, EasyPaymentComponent, FunfactsComponent, TestimonialsComponent, ReadyToTalkComponent, DownloadAppComponent, CtaComponent],
    templateUrl: './digital-banking.component.html',
    styleUrl: './digital-banking.component.scss'
})
export class DigitalBankingComponent {}