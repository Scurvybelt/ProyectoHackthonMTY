import { Injectable } from '@angular/core';
import axios from 'axios';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  private apiUrl = 'https://banorte.cognitiveservices.azure.com/';
  private apiKey = '1e94b02cddb7406ea66d074ed18573ed';

  constructor() { 

  }

  analyzeImage(imageUrl: string):Promise <any>{
    const url = ``;

    const headers = {
      'Ocp-Apim-Subscription-Key': this.apiKey,
      'Content-Type': 'application/json'
    };

    const body = {
      url: imageUrl
    };

    return axios.post(url, body, {headers})
      .then(response => response.data)
      .catch(error => {
        console.error('Error analyzing image:', error);
        throw error;
      });
  }



   


}
