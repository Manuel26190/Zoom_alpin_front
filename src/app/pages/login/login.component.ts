import { Component, OnInit } from '@angular/core'
import {
    ReactiveFormsModule,
    FormBuilder,
    Validators,
    FormGroup,
} from '@angular/forms'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup

    constructor(private FormBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.loginForm = this.FormBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    onSubmit() {
        if (this.loginForm.valid) {
            console.log(this.loginForm.value)
        }
    }
}
