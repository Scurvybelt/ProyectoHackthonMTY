import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoIAComponent } from './contenido-ia.component';

describe('ContenidoIAComponent', () => {
  let component: ContenidoIAComponent;
  let fixture: ComponentFixture<ContenidoIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoIAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
