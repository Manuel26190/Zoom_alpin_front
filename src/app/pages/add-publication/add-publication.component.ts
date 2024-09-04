import { Component, OnInit } from '@angular/core'
import {
    ReactiveFormsModule,
    FormBuilder,
    Validators,
    FormGroup,
} from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

import { Router } from '@angular/router'
import { PublicationService } from '../../core/services/publication.service'

@Component({
    selector: 'app-add-publication',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './add-publication.component.html',
    styleUrl: './add-publication.component.scss',
})
export class AddPublicationComponent {
    addPublication!: FormGroup
    id: number = 0
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private publicationService: PublicationService
    ) {}

    ngOnInit(): void {
        // Initialiser le formulaire avec la valeur du placeholder
        this.addPublication = this.formBuilder.group({
            type: [''], // L'option placeholder a une valeur vide
        })
        this.id = this.route.snapshot.params['id']
        this.addPublication = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            location: ['', Validators.required],
            zip_code: ['', Validators.required],
            type: ['', Validators.required],
            image: ['', Validators.required],
            date_start: ['', Validators.required],
            // postedat: ['', Validators.required],
        })
    }

    // Ajouter une publication
    onSubmit() {
        //console.log(this.addPublication.value)
        //Ajouter une publication
        if (this.addPublication.valid) {
            //console.log(this.addEventForm.value)
            this.publicationService
                .addPublication(this.addPublication.value)
                .subscribe({
                    next: (response) => {
                        console.log(response)
                        // Redirection après succès de la requête
                        this.router.navigate(['/publications'])
                    },
                    error: (error) => {
                        console.error('add_event error', error.error)
                    },
                })
        } else {
            alert('remplir tous les champs du formulaire')
        }
    }
}
