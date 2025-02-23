import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertcurrancyComponent } from './convertcurrancy.component';

describe('ConvertcurrancyComponent', () => {
  let component: ConvertcurrancyComponent;
  let fixture: ComponentFixture<ConvertcurrancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvertcurrancyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertcurrancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
