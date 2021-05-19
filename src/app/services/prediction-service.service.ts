import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PredictionService {

    constructor(private http: HttpClient) { }

    makePrediction(modelName: string, modelVersion: number, data: any): Observable<any> {
        return this.http.post<any>(`https://app.shippedbrain.com/api/v0/predict/${modelName}/${modelVersion}`, data)
    }
}
