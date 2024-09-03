import { Component } from '@angular/core'
import { CommonModule, DatePipe } from '@angular/common'
@Component({
    selector: 'app-publications',
    standalone: true,
    imports: [CommonModule],
    providers: [DatePipe],
    templateUrl: './publications.component.html',
    styleUrl: './publications.component.scss',
})
export class PublicationComponent {
    constructor(public datepipe: DatePipe) {}
}
