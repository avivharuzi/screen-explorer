import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class SsrInterceptor implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (environment.production && isPlatformServer(this.platformId) && request.url.includes(environment.baseApiUrl)) {
      request = request.clone({ url: request.url.replace(environment.baseApiUrl, environment.baseApiUrlSsr) });
    }

    return next.handle(request);
  }
}
