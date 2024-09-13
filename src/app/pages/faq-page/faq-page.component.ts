import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-faq-page',
    standalone: true,
    imports: [PageBannerComponent, CtaComponent, NgFor, NgClass],
    templateUrl: './faq-page.component.html',
    styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

    accordionItems = [
        {
            title: 'Which material types can you work with?',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`,
            open: false
        },
        {
            title: 'Is smart lock required for instant apps?',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`,
            open: false
        },
        {
            title: 'Can I have multiple activities in a single feature?',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`,
            open: false
        },
        {
            title: 'Which material types can you work with?',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`,
            open: false
        },
        {
            title: 'Why choose our services in your business?',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`,
            open: false
        },
        {
            title: 'How to get start with us?',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`,
            open: false
        },
        {
            title: 'Why choose our services in your business?',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.`,
            open: false
        }
    ];

    selectedItem : any = null;
    toggleAccordionItem(item:any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }

}