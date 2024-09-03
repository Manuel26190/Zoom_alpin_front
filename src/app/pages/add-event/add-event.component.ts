import { Component, OnInit } from '@angular/core'
import {
    ReactiveFormsModule,
    FormBuilder,
    Validators,
    FormGroup,
} from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

import { Router } from '@angular/router'
import { EventService } from '../../core/services/event.service'

@Component({
    selector: 'app-add-event',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './add-event.component.html',
    styleUrl: './add-event.component.scss',
})
export class AddEventComponent implements OnInit {
    addEventForm!: FormGroup
    id: number = 0

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private eventService: EventService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // Initialiser le formulaire avec la valeur du placeholder
        this.addEventForm = this.formBuilder.group({
            type: [''], // L'option placeholder a une valeur vide
        })
        this.id = this.route.snapshot.params['id']
        this.addEventForm = this.formBuilder.group({
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

    //Cette function sert à ajouter ou mettre à jour une tâche
    onSubmit() {
        //console.log(this.addEventForm.value)
        //Ajouter une évènement
        if (this.addEventForm.valid) {
            //console.log(this.addEventForm.value)
            this.eventService.addEvent(this.addEventForm.value).subscribe({
                next: (response) => {
                    console.log(response)
                    // Redirection après succès de la requête
                    this.router.navigate(['/events'])
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
