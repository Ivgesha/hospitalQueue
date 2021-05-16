import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuequePageComponent } from './queque-page.component';

describe('QuequePageComponent', () => {
  let component: QuequePageComponent;
  let fixture: ComponentFixture<QuequePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuequePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuequePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
