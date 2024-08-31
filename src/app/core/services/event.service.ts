import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Event } from '../model/EventModel'

@Injectable({
    providedIn: 'root',
})
export class EventService {
    constructor(private http: HttpClient) {}

    // Methode pour récupérer tous les evenements
    // Pas besoin de token car pas login
    getAllEvents(): Observable<any> {
        return this.http.get('http://localhost:8000/api/events')
    }

    //Methode pour ajouter un nouvel evenement
    //Token requis
    addEvent(event: any): Observable<any> {
        let token = localStorage.getItem('token')
        let headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        })
        // console.log('service add ok', headers)
        // console.log('service add ok', token)
        return this.http.post('http://localhost:8000/api/add_event', event, {
            headers: headers,
        })
    }

    // Methode pour supprimer un evenement
    // Token requis
    removeEvent(event: any): Observable<any> {
        let token = localStorage.getItem('token')
        let headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        })
        return this.http.post('http://localhost:8000/api/remove_event', event, {
            headers: headers,
        })
    }

    // Methode pour modifier un evenement
    // Token requis
}
