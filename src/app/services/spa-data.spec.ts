import { TestBed } from '@angular/core/testing';
import { SpaData } from './spa-data';

describe('SpaData', () => {
  let service: SpaData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
