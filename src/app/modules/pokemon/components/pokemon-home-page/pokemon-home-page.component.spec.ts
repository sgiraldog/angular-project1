import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomePageComponent } from './pokemon-home-page.component';

describe('PokemonHomePageComponent', () => {
  let component: PokemonHomePageComponent;
  let fixture: ComponentFixture<PokemonHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
