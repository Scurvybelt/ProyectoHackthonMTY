import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { MoneyTransferComponent } from '../../common/money-transfer/money-transfer.component';
import { KeyFeaturesComponent } from '../../common/key-features/key-features.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';

@Component({
    selector: 'app-business-page',
    standalone: true,
    imports: [RouterLink, PageBannerComponent, HowItWorksComponent, KeyFeaturesComponent, MoneyTransferComponent, FaqComponent],
    templateUrl: './business-page.component.html',
    styleUrl: './business-page.component.scss'
})
export class BusinessPageComponent {}