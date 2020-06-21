import { TestBed } from '@angular/core/testing';

import { SsrInterceptor } from './ssr.interceptor';

describe('SsrInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [SsrInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: SsrInterceptor = TestBed.inject(SsrInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
