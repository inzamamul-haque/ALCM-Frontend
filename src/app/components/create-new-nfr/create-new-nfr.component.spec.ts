import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateNewNfrComponent} from './create-new-nfr.component';

describe('CreateNewNfrComponent', () => {
  let component: CreateNewNfrComponent;
  let fixture: ComponentFixture<CreateNewNfrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewNfrComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewNfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
