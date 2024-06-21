// src/events/events.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './events.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  findOne(id: number): Promise<Event> {
    return this.eventsRepository.findOneBy({ id });
  }

  async create(event: Event): Promise<Event> {
    return this.eventsRepository.save(event);
  }

  // async remove(id: number): Promise<void> {
  //   await this.eventsRepository.delete(id);
  // }
}
