import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navside2Component } from './navside2.component';

describe('Navside2Component', () => {
  let component: Navside2Component;
  let fixture: ComponentFixture<Navside2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navside2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navside2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
