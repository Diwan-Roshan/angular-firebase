import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaddresComponent } from './myaddres.component';

describe('MyaddresComponent', () => {
  let component: MyaddresComponent;
  let fixture: ComponentFixture<MyaddresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyaddresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyaddresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
