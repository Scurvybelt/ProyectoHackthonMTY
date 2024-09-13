import { Component } from '@angular/core';
import { RatingsReviewsComponent } from '../../common/ratings-reviews/ratings-reviews.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { ProtectingYourMoneyComponent } from './protecting-your-money/protecting-your-money.component';
import { FeaturesComponent } from './features/features.component';
import { KeyFeaturesComponent } from '../../common/key-features/key-features.component';
import { ServicesComponent } from './services/services.component';
import { WhyChooseKlobComponent } from '../../common/why-choose-klob/why-choose-klob.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { PopularCountriesComponent } from '../../common/popular-countries/popular-countries.component';
import { BannerComponent } from './banner/banner.component';

@Component({
    selector: 'app-currency-transfer-provider',
    standalone: true,
    imports: [BannerComponent, PopularCountriesComponent, HowItWorksComponent, WhyChooseKlobComponent, ServicesComponent, KeyFeaturesComponent, FeaturesComponent, ProtectingYourMoneyComponent, DownloadAppComponent, RatingsReviewsComponent, FaqComponent],
    templateUrl: './currency-transfer-provider.component.html',
    styleUrl: './currency-transfer-provider.component.scss'
})
export class CurrencyTransferProviderComponent {}