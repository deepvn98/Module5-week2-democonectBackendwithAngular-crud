import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrrerComponent } from './orrer.component';

describe('OrrerComponent', () => {
  let component: OrrerComponent;
  let fixture: ComponentFixture<OrrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
