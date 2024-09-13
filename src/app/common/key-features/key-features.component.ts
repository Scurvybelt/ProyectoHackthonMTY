import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-key-features',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './key-features.component.html',
    styleUrl: './key-features.component.scss'
})
export class KeyFeaturesComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}