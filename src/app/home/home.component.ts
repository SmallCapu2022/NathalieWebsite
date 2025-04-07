import { Component } from '@angular/core';
import { ContactmeComponent } from '../contactme/contactme.component';
import { CertificationComponent } from "../certification/certification.component";
import { FengshuiComponent } from "../fengshui/fengshui.component";

@Component({
  selector: 'app-home',
  imports: [ContactmeComponent, CertificationComponent, FengshuiComponent, CertificationComponent, FengshuiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
