import { VideoSite } from './video-site.enum';
import { VideoType } from './video-type.enum';

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: VideoSite;
  size: number;
  type: VideoType;
}
