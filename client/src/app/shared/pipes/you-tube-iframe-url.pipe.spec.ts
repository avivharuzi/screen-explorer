import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';
import { YouTubeIframeUrlPipe } from './you-tube-iframe-url.pipe';

describe('YouTubeIframeUrlPipe', () => {
  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new YouTubeIframeUrlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
