import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NfrComponent} from './nfr.component';

describe('NfrComponent', () => {
  let component: NfrComponent;
  let fixture: ComponentFixture<NfrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NfrComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
