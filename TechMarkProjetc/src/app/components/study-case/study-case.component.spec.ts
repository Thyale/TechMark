import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCaseComponent } from './study-case.component';

describe('StudyCaseComponent', () => {
  let component: StudyCaseComponent;
  let fixture: ComponentFixture<StudyCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
