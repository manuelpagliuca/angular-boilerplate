import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivePageComponent } from './interactive-page.component';

describe('InteractivePageComponent', () => {
  let component: InteractivePageComponent;
  let fixture: ComponentFixture<InteractivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractivePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
