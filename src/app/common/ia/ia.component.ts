import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import Groq from 'groq-sdk';
import { BannerComponent } from "../../demos/banking-payment-processing/banner/banner.component";
import { ContenidoIAComponent } from "./contenido-ia/contenido-ia.component";
import { PageBannerComponent } from "../../pages/about-page-one/page-banner/page-banner.component";
import { CtaComponent } from "../cta/cta.component";



@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, BannerComponent, ContenidoIAComponent, PageBannerComponent, CtaComponent],
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.scss'
})
export class IaComponent {
  // groq = new Groq({
  //   dangerouslyAllowBrowser: true,
  //   apiKey: process.env['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'], // This is the default and can be omitted
  // });
  
  // constructor(){

  // }
  
  
  
  // async preguntarIA(): Promise<void> {
  //   const chatCompletion = await this.groq.chat.completions.create({
  //     messages: [{ role: 'user', content: 'Explain the importance of low latency LLMs' }],
  //     model: 'llama-3.1-70b-versatile',
  //   });
  
  //   console.log(chatCompletion.choices[0].message.content);
  // }
}
