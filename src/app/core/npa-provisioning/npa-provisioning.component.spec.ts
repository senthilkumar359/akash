import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaProvisioningComponent } from './npa-provisioning.component';

describe('NpaProvisioningComponent', () => {
  let component: NpaProvisioningComponent;
  let fixture: ComponentFixture<NpaProvisioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpaProvisioningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaProvisioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
