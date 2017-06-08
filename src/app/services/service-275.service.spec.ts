/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service275Service } from './service-275.service';

describe('Service275Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service275Service]
    });
  });

  it('should ...', inject([Service275Service], (service: Service275Service) => {
    expect(service).toBeTruthy();
  }));
});
