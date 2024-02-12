import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrodetalleComponent } from './librodetalle.component';

describe('LibrodetalleComponent', () => {
  let component: LibrodetalleComponent;
  let fixture: ComponentFixture<LibrodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrodetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
