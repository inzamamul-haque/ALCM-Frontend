import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BrComponent} from './br.component';

describe('BrComponent', () => {
  let component: BrComponent;
  let fixture: ComponentFixture<BrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
