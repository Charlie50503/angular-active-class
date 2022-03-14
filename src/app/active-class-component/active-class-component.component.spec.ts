import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveClassComponentComponent } from './active-class-component.component';

describe('ActiveClassComponentComponent', () => {
  let component: ActiveClassComponentComponent;
  let fixture: ComponentFixture<ActiveClassComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveClassComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
