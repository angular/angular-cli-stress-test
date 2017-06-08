/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service126Service } from './service-126.service';

describe('Service126Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service126Service]
    });
  });

  it('should ...', inject([Service126Service], (service: Service126Service) => {
    expect(service).toBeTruthy();
  }));
});
