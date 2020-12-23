import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpServiceService } from './http-service.service';

describe('HttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule , RouterTestingModule]
  }));

  it('should be created', () => {
    const service: HttpServiceService = TestBed.get(HttpServiceService);
    expect(service).toBeTruthy();
  });
});
