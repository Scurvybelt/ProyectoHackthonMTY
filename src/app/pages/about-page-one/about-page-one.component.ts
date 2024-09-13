import { Component } from '@angular/core';
import { CtaComponent } from '../../common/cta/cta.component';
import { DownloadAppComponent } from '../../common/download-app/download-app.component';
import { ReadyToTalkComponent } from '../../common/ready-to-talk/ready-to-talk.component';
import { TeamComponent } from '../../common/team/team.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { HowWeFoundedComponent } from '../../common/how-we-founded/how-we-founded.component';

@Component({
    selector: 'app-about-page-one',
    standalone: true,
    imports: [PageBannerComponent, HowWeFoundedComponent, TeamComponent, ReadyToTalkComponent, DownloadAppComponent, CtaComponent],
    templateUrl: './about-page-one.component.html',
    styleUrl: './about-page-one.component.scss'
})
export class AboutPageOneComponent {}