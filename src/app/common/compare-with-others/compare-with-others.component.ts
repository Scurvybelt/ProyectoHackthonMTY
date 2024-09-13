import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-compare-with-others',
    standalone: true,
    imports: [RouterLink, NgClass],
    templateUrl: './compare-with-others.component.html',
    styleUrl: './compare-with-others.component.scss'
})
export class CompareWithOthersComponent {

    constructor(
        public router: Router
    ) {}

}