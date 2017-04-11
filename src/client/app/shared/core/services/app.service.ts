import { Injectable } from '@angular/core';

// app
import { LogService } from './logging/index';
import { Config } from '../utils/config';

@Injectable()
export class AppService {
  constructor(public log: LogService) {
    this.log.debug(`AppService -> Config env: ${Config.ENVIRONMENT().ENV}`);
  }
}
