import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialpopupComponent } from './socialpopup.component';

describe('SocialpopupComponent', () => {
  let component: SocialpopupComponent;
  let fixture: ComponentFixture<SocialpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
