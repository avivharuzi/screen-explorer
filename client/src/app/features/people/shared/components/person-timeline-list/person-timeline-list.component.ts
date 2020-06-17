import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Cast, Crew } from '../../shared/person-detail';
import { APP_ROUTES } from '../../../../../app-routes';

@Component({
  selector: 'app-person-timeline-list',
  templateUrl: './person-timeline-list.component.html',
  styleUrls: ['./person-timeline-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonTimelineListComponent {
  @Input() cast: Cast[];
  @Input() crew: Crew[];

  getEpisodesSubtitle(count?: number): string {
    if (!count) {
      return;
    }

    return `${count} ${count > 1 ? 'episodes' : 'episode'}`;
  }

  getTitleLink(id: number, mediaType: string): (string | number)[] {
    return ['/', `${mediaType === 'movie' ? APP_ROUTES.MOVIES.self : APP_ROUTES.TV_SHOWS.self }`, id];
  }
}
