import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { AddEventComponent } from './pages/add-event/add-event.component'
import { EventComponent } from './pages/events/events.component'
import { ContactComponent } from './pages/contact/contact.component'
import { LoginComponent } from './pages/login/login.component'
import { UserProfileComponent } from './pages/user-profil/user-profil.component'
import { PublicationComponent } from './pages/publications/publications.component'
import { RegisterComponent } from './pages/register/register.component'
import { AddPublicationComponent } from './pages/add-publication/add-publication.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add_event', component: AddEventComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'publications', component: PublicationComponent },
    { path: 'events', component: EventComponent },
    { path: 'add_publication', component: AddPublicationComponent },
]
