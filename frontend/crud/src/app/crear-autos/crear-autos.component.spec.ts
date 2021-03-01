import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAutosComponent } from './crear-autos.component';

describe('CrearAutosComponent', () => {
  let component: CrearAutosComponent;
  let fixture: ComponentFixture<CrearAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
