import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrListComponent } from './br-list.component';

describe('BrListComponent', () => {
  let component: BrListComponent;
  let fixture: ComponentFixture<BrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
