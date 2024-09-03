import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core'

@Component({
    selector: 'app-user-profil',
    standalone: true,
    imports: [],
    templateUrl: './user-profil.component.html',
    styleUrl: './user-profil.component.scss',
})
export class UserProfileComponent implements AfterViewInit {
    @ViewChild('postModal') postModalElement!: ElementRef
    @ViewChild('eventModal') eventModalElement!: ElementRef
    @ViewChild('notifModal') notifModalElement!: ElementRef

    ngAfterViewInit() {
        // Initialiser les modales avec display: none
        this.postModalElement.nativeElement.style.display = 'none'
        this.eventModalElement.nativeElement.style.display = 'none'
        //this.notifModalElement.nativeElement.style.display = 'none'
    }

    openModal(modalType: string): void {
        const postModal = this.postModalElement.nativeElement
        const eventModal = this.eventModalElement.nativeElement
        const notifModal = this.notifModalElement.nativeElement

        // Masquer toutes les modales
        postModal.style.display = 'none'
        eventModal.style.display = 'none'
        notifModal.style.display = 'none'

        // Afficher la modal appropriée
        switch (modalType) {
            case 'post':
                postModal.style.display = 'block'
                break
            case 'event':
                eventModal.style.display = 'block'
                break
            case 'notif':
                notifModal.style.display = 'block'
                break
        }
    }
}
