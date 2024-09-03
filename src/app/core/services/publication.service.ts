import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Publication } from '../model/PublicationModel'

@Injectable({
    providedIn: 'root',
})
export class PublicationService {
    constructor(private http: HttpClient) {}

    addPublication($publication: Publication): Observable<any> {
        return this.addPublication($publication)
    }
}
