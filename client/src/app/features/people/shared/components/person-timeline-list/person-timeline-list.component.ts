import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Cast, Crew } from '../../shared/person-detail';

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
      return '';
    }

    return `${count} ${count > 1 ? 'episodes' : 'episode'}`;
  }

  trackByC(index: number, c: Cast | Crew): number {
    return c.id || index;
  }
}
