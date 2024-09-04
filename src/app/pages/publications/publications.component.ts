import { Component, OnInit } from '@angular/core'
import { CommonModule, DatePipe } from '@angular/common'
import { Publication } from '../../core/model/PublicationModel'
import { PublicationService } from '../../core/services/publication.service'
import { CardComponent } from '../../components/card/card.component'
@Component({
    selector: 'app-publications',
    standalone: true,
    imports: [CommonModule, DatePipe, CardComponent],
    templateUrl: './publications.component.html',
    styleUrl: './publications.component.scss',
})
export class PublicationComponent implements OnInit {
    constructor(
        public datepipe: DatePipe,
        private publicationService: PublicationService
    ) {}

    publicationList: Publication[] = []

    ngOnInit(): void {
        this.publicationService.getPublications().subscribe((data) => {
            if (data) {
                this.publicationList = data
                //console.log(this.publicationList)
            } else {
                console.log('error')
            }
        })
    }
}
