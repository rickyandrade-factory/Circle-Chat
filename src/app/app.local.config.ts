import { Injectable } from '@angular/core';
@Injectable()

export class AppLocalConfig {
  config = {
    apiUrl: 'http://localhost:3322/',
    nodeServerUrl: 'http://localhost:3322/',
    name: 'MarketMaster Academy',
    title: 'Communication App with Admin Panel & Dashboard App with Angular 8.0 support',
    version: '1.0.0',
    debug: true,
  };

  getConfig(): object {
    return this.config;
  }
}
