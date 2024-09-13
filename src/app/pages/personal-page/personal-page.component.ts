import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { PopularCountriesComponent } from '../../common/popular-countries/popular-countries.component';
import { ProtectingYourMoneyComponent } from '../../demos/currency-transfer-provider/protecting-your-money/protecting-your-money.component';
import { MoneyTransferComponent } from '../../common/money-transfer/money-transfer.component';
import { ServicesComponent } from '../../demos/currency-transfer-provider/services/services.component';

@Component({
    selector: 'app-personal-page',
    standalone: true,
    imports: [PageBannerComponent,ServicesComponent, MoneyTransferComponent, ProtectingYourMoneyComponent, PopularCountriesComponent],
    templateUrl: './personal-page.component.html',
    styleUrl: './personal-page.component.scss'
})
export class PersonalPageComponent {}