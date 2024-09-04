import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Publication } from '../model/PublicationModel'

@Injectable({
    providedIn: 'root',
})
export class PublicationService {
    constructor(private http: HttpClient) {}

    // Methode pour recuperer toutes les publications
    // Pas besoin de token car pas login
    getPublications(): Observable<any> {
        return this.http.get('http://localhost:8000/api/publications')
    }

    // Methode pour ajouter une nouvelle publication
    // Token requis
    addPublication(publication: Publication): Observable<any> {
        let token = localStorage.getItem('token')
        let headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        })
        return this.http.post(
            'http://localhost:8000/api/add_publication',
            publication,
            {
                headers: headers,
            }
        )
    }
}
