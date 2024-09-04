import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor() {}

    images: string[] = [
        './assets/diaporama/Vautour-fauve-2.jpg',
        './assets/diaporama/couple-oiseau.jpg',
        './assets/pictures/Niverolle_alpine.jpg',
        './assets/pictures/oiseau-rocher.jpg',
        './assets/pictures/diapo_1.jpeg',
        './assets/pictures/diapo_4.jpeg',
    ]

    ngOnInit(): void {
        // this.startSlideshow()
    }

    currentImageIndex = 0

    startSlideshow(): void {
        setInterval(() => {
            // Afficher l'image suivante
            const nextImageIndex =
                (this.currentImageIndex + 1) % this.images.length
            // Transition de l'opacité de l'image actuelle à 0
            const currentImageElement = document.getElementById(
                'image-' + this.currentImageIndex
            )
            if (currentImageElement) {
                currentImageElement.style.opacity = '0'
            }
            // Transition de l'opacité de l'image suivante à 1
            const nextImageElement = document.getElementById(
                'image-' + nextImageIndex
            )
            if (nextImageElement) {
                setTimeout(() => {
                    nextImageElement.style.opacity = '1'
                }, 100) // Retard pour permettre à la première image de rester visible un court instant
                this.currentImageIndex = nextImageIndex
            }
        }, 15000) // Change d'image toutes les 8 secondes
    }
}
