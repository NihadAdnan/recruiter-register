import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-address',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './company-address.component.html',
  styleUrl: './company-address.component.scss'
})
export class CompanyAddressComponent {
  selectedCountry: string ="1";

  isBangladeshSelected(): boolean {
    return this.selectedCountry === '1'; 
  }

}
