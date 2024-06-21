
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { Event } from './events/events.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-billowing-unit-a5ekxxtp.us-east-2.aws.neon.tech',
      port: 5432,
      username: 'plazerdb_owner',
      password: 'yuRPD2zjht7o',
      database: 'DiaryApp',
      ssl: true,
      entities: [Event],
      synchronize: true,
      logging: true,
    }),
    EventsModule,
  ],
})
export class AppModule {}

