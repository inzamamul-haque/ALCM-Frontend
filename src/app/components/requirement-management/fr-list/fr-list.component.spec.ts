import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrListComponent } from './fr-list.component';

describe('FrListComponent', () => {
  let component: FrListComponent;
  let fixture: ComponentFixture<FrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
