/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service919Service } from './service-919.service';

describe('Service919Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service919Service]
    });
  });

  it('should ...', inject([Service919Service], (service: Service919Service) => {
    expect(service).toBeTruthy();
  }));
});
