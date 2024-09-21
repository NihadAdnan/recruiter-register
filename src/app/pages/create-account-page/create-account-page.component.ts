import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { InputFieldComponent } from '../../components/input-field/input-field.component';
import { IndustryTypeComponent } from '../../components/industry-type/industry-type.component';
import { CompanyAddressComponent } from '../../components/company-address/company-address.component';
import { DisabilityInclusionComponent } from '../../components/disability-inclusion/disability-inclusion.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account-page',
  standalone: true,
  imports: [AppComponent,InputFieldComponent,IndustryTypeComponent,CompanyAddressComponent,DisabilityInclusionComponent,FormsModule],
  templateUrl: './create-account-page.component.html',
  styleUrl: './create-account-page.component.scss'
})
export class CreateAccountPageComponent {
  facilitiesForDisabilities:boolean = false;
}
