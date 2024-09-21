import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabilityInclusionComponent } from './disability-inclusion.component';

describe('DisabilityInclusionComponent', () => {
  let component: DisabilityInclusionComponent;
  let fixture: ComponentFixture<DisabilityInclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabilityInclusionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisabilityInclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
