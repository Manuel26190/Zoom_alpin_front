import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { CommonModule } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'
import { DatePipe } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HomeComponent,
        CommonModule,
        HeaderComponent,
        FooterComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [DatePipe],
})
export class AppComponent {
    currentRoute: string = ''

    constructor(private router: Router) {
        // Router event pour obtenir le chemin actuel
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                if (event instanceof NavigationEnd) {
                    this.currentRoute = event.url
                }
            })
    }
}
