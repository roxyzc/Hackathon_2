import {
  EntitySubscriberInterface,
  EventSubscriber,
  DataSource,
  UpdateEvent,
  InsertEvent,
} from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo(): typeof User {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>): Promise<void> {
    if (event.entity.password) {
      const salt = await bcrypt.genSalt(10);
      event.entity.password = await bcrypt.hash(event.entity.password, salt);
    }
  }

  async beforeUpdate(event: UpdateEvent<User>): Promise<void> {
    const now = new Date().getTime();
    event.entity.updated_at = now;
  }
}
