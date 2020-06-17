import { MediaTypeToRouteNamePipe } from './media-type-to-route-name.pipe';

describe('MediaTypeToRouteNamePipe', () => {
  it('create an instance', () => {
    const pipe = new MediaTypeToRouteNamePipe();
    expect(pipe).toBeTruthy();
  });
});
