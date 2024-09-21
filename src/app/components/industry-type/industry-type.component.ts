import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-type',
  standalone: true,
  imports: [],
  templateUrl: './industry-type.component.html',
  styleUrl: './industry-type.component.scss'
})
export class IndustryTypeComponent {
  selectedCategory: string = '';

  types = [
    { label: 'Dairy', value: 'Agro' },
    { label: 'College', value: 'Education' },
    { label: 'ISP', value: 'IT' },
    { label: 'Law Firm', value: 'Others' }, 
    { label: 'School', value: 'Education' }, 
    { label: 'Software Company', value: 'IT' }
  ];

  getTypes() {
    if (this.selectedCategory === 'Others' || this.selectedCategory === '') {
      return this.types;
    } else {
      return this.types.filter(type => type.value === this.selectedCategory);
    }
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
  }
}
