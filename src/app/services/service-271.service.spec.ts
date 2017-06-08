/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service271Service } from './service-271.service';

describe('Service271Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service271Service]
    });
  });

  it('should ...', inject([Service271Service], (service: Service271Service) => {
    expect(service).toBeTruthy();
  }));
});
