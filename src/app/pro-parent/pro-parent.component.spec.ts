import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProParentComponent } from './pro-parent.component';

describe('ProParentComponent', () => {
  let component: ProParentComponent;
  let fixture: ComponentFixture<ProParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
