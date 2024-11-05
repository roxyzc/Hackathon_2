import {
  EntitySubscriberInterface,
  EventSubscriber,
  DataSource,
  UpdateEvent,
} from 'typeorm';
import { Report } from './report.entity';

@EventSubscriber()
export class ReportSubscriber implements EntitySubscriberInterface<Report> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo(): typeof Report {
    return Report;
  }

  async beforeUpdate(event: UpdateEvent<Report>): Promise<void> {
    const now = new Date().getTime();
    event.entity.updated_at = now;
  }
}
