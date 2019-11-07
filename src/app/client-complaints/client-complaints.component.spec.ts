import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComplaintsComponent } from './client-complaints.component';

describe('ClientComplaintsComponent', () => {
  let component: ClientComplaintsComponent;
  let fixture: ComponentFixture<ClientComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
