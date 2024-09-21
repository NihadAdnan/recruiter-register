import { Component } from '@angular/core';

@Component({
  selector: 'app-disability-inclusion',
  standalone: true,
  imports: [],
  templateUrl: './disability-inclusion.component.html',
  styleUrl: './disability-inclusion.component.scss'
})
export class DisabilityInclusionComponent {
  disabilities = [
    { label: 'Accessible documentation and alternative formats', value: '1'},
    { label: 'Accessible Washrooms / Toilets', value: '2'},
    { label: 'Adapted Transport facility for Distant Travelling  ', value: '3'},
    { label: 'Assistive Software, communication and computer devices', value: '4'},
    { label: 'Available Flexible working shifts', value: '5'},
    { label: 'Offering Work from home', value: '6'},
    { label: 'Ramps or Lifts or Escalators for entry and move between floors', value: '7'},
    { label: 'Reasonable Accommodation in Recruitment/interview procedures like sign language, oral/typed/video interview    ', value: '8'},
    { label: 'Warning Indicators or Markers in place for hazards, staircase', value: '9'},
    { label: 'Workstation or seating adaptations for easy use', value: '10'},
  ]
}
