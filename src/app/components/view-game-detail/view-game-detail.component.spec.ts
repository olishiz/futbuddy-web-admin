import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGameDetailComponent } from './view-game-detail.component';

describe('ViewGameDetailComponent', () => {
  let component: ViewGameDetailComponent;
  let fixture: ComponentFixture<ViewGameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGameDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
