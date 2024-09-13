import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [RouterLink, NgFor, NgClass],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss'
})
export class FaqComponent {

    accordionItems = [
        {
            title: 'How do I create an account with Klob?',
            content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            content2: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            open: false
        },
        {
            title: 'How to send money online?',
            content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            content2: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            open: false
        },
        {
            title: 'Is my money safe with Klob?',
            content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            content2: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            open: false
        },
        {
            title: 'What verification do I need to send money?',
            content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            content2: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            open: false
        },
        {
            title: 'How does Klob protect your money?',
            content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
            content2: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.`,
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