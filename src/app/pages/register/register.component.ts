import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
    ReactiveFormsModule,
    FormBuilder,
    Validators,
    FormGroup,
    FormControl,
} from '@angular/forms'
import { UserService } from '../../core/services/user.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
    registerForm = new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
    })

    constructor(
        private FormBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.registerForm = this.FormBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    ngOnInit(): void {}

    // Envoie les données du formulaire s'inscrire à la base de données
    onSubmit() {
        //console.log(this.registerForm.value)
        if (this.registerForm.valid) {
            this.userService.registerUser(this.registerForm.value).subscribe({
                next: (response) => {
                    console.log(response)
                    // Redirection après succès de la requête
                    this.router.navigate(['/login'])
                },
                error: (error) => {
                    console.error('register error', error.error)
                },
            })
        }
    }
}
