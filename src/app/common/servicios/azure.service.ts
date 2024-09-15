import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  private apiUrl = 'https://banorte.cognitiveservices.azure.com/';
  private apiKey = '1e94b02cddb7406ea66d074ed18573ed';
  

  constructor(private http: HttpClient) { 

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

  signup(form:any): Observable<any>{

    return this.http.post<any>('localhost:3000/api/signup', form);
  }

  signin(from: any): Observable<any>{
    return this.http.post<any>('localhost:3000/api/signip', from);
  }



   


}
