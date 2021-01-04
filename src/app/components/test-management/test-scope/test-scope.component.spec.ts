import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TestScopeComponent} from './test-scope.component';

describe('TestScopeComponent', () => {
  let component: TestScopeComponent;
  let fixture: ComponentFixture<TestScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestScopeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
