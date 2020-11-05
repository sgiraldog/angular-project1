import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCarouselComponent } from './favorite-carousel.component';

describe('FavoriteCarouselComponent', () => {
  let component: FavoriteCarouselComponent;
  let fixture: ComponentFixture<FavoriteCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
