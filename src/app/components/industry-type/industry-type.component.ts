import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-industry-type',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './industry-type.component.html',
  styleUrls: ['./industry-type.component.scss']
})
export class IndustryTypeComponent {
  selectedCategory: string = '';
  searchQuery: string = '';

  types = [
    { label: 'Dairy', value: 'Agro' },
    { label: 'College', value: 'Education' },
    { label: 'ISP', value: 'IT' },
    { label: 'Law Firm', value: 'Others' }, 
    { label: 'School', value: 'Education' }, 
    { label: 'Software Company', value: 'IT' }
  ];

  getTypes() {
    let filteredTypes = this.selectedCategory === 'Others' || this.selectedCategory === ''
      ? this.types
      : this.types.filter(type => type.value === this.selectedCategory);

    if (this.searchQuery) {
      filteredTypes = filteredTypes.filter(type => 
        type.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    return filteredTypes;
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.searchQuery = ''; 
  }

  onSearchQueryChange() {
  }
}
