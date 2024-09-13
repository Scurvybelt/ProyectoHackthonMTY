import { Routes } from '@angular/router';
import { BankingPaymentProcessingComponent } from './demos/banking-payment-processing/banking-payment-processing.component';
import { LoanProvidersComponent } from './demos/loan-providers/loan-providers.component';
import { DigitalBankingComponent } from './demos/digital-banking/digital-banking.component';
import { FinancialServiceProviderComponent } from './demos/financial-service-provider/financial-service-provider.component';
import { BankersEntrepreneursComponent } from './demos/bankers-entrepreneurs/bankers-entrepreneurs.component';
import { SocialFinanceAgencyComponent } from './demos/social-finance-agency/social-finance-agency.component';
import { CurrencyTransferProviderComponent } from './demos/currency-transfer-provider/currency-transfer-provider.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AboutPageOneComponent } from './pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './pages/about-page-two/about-page-two.component';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';
import { BusinessPageComponent } from './pages/business-page/business-page.component';
import { HowItWorksPageComponent } from './pages/how-it-works-page/how-it-works-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { BlogGridPageComponent } from './pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './pages/blog-details-page/blog-details-page.component';
import { ContactPageOneComponent } from './pages/contact-page-one/contact-page-one.component';
import { ContactPageTwoComponent } from './pages/contact-page-two/contact-page-two.component';

export const routes: Routes = [
    // {path: '', component: BankingPaymentProcessingComponent},
    {path: 'index-2', component: LoanProvidersComponent},
    {path: 'index-3', component: DigitalBankingComponent},
    {path: '', component: FinancialServiceProviderComponent},
    {path: 'index-5', component: BankersEntrepreneursComponent},
    {path: 'index-6', component: SocialFinanceAgencyComponent},
    {path: 'index-7', component: CurrencyTransferProviderComponent},
    {path: 'about', component: AboutPageOneComponent},
    {path: 'about-2', component: AboutPageTwoComponent},
    {path: 'features', component: FeaturesPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'personal', component: PersonalPageComponent},
    {path: 'business', component: BusinessPageComponent},
    {path: 'how-it-works', component: HowItWorksPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'signin', component: SigninPageComponent},
    {path: 'signup', component: SignupPageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageOneComponent},
    {path: 'contact-2', component: ContactPageTwoComponent},
    // Here add new pages component

    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole pages component list
];