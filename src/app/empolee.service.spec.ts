import { TestBed } from '@angular/core/testing';

import { EmpoleeService } from './empolee.service';

describe('EmpoleeService', () => {
  let service: EmpoleeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpoleeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
