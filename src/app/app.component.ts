import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";
import { ContactmeComponent } from './contactme/contactme.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, ContactmeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
toggleTheme() {
throw new Error('Method not implemented.');
}
  title = 'NathalieWebsite';

}
