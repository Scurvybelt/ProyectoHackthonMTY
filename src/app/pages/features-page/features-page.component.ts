import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { ServicesComponent } from '../../common/services/services.component';
import { ReadyToTalkComponent } from '../../common/ready-to-talk/ready-to-talk.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { ContenidoIAComponent } from "../../common/ia/contenido-ia/contenido-ia.component";

@Component({
    selector: 'app-features-page',
    standalone: true,
    imports: [PageBannerComponent, ServicesComponent, ReadyToTalkComponent, DownloadAppComponent, CtaComponent, ContenidoIAComponent],
    templateUrl: './features-page.component.html',
    styleUrl: './features-page.component.scss'
})
export class FeaturesPageComponent {}