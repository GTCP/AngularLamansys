import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuilleComponentComponent } from './guille-component.component';

describe('GuilleComponentComponent', () => {
  let component: GuilleComponentComponent;
  let fixture: ComponentFixture<GuilleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuilleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuilleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
