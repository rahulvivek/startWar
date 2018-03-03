import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanetComponent } from './list-planet.component';

describe('ListPlanetComponent', () => {
  let component: ListPlanetComponent;
  let fixture: ComponentFixture<ListPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
