import { Component, Input, OnInit } from '@angular/core'
import { Event } from '../../core/model/EventModel'
import { EventService } from '../../core/services/event.service'
import { CommonModule } from '@angular/common'
import { DatePipe } from '@angular/common'
import { CardComponent } from '../../components/card/card.component'

@Component({
    selector: 'app-events',
    standalone: true,
    imports: [DatePipe, CommonModule, CardComponent],
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss',
})
export class EventComponent implements OnInit {
    constructor(
        private eventService: EventService,
        private datePipe: DatePipe
    ) {}

    eventList: Event[] = []

    ngOnInit(): void {
        // Affiche tous les événements
        this.eventService.getAllEvents().subscribe((data) => {
            if (data) {
                this.eventList = data
                //console.log(this.eventList)
            } else {
                console.log('error')
            }
        })
    }
}
