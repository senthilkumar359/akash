import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaClassificationComponent } from './npa-classification.component';

describe('NpaClassificationComponent', () => {
  let component: NpaClassificationComponent;
  let fixture: ComponentFixture<NpaClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpaClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
