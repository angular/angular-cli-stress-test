/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service45Service } from './service-45.service';

describe('Service45Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service45Service]
    });
  });

  it('should ...', inject([Service45Service], (service: Service45Service) => {
    expect(service).toBeTruthy();
  }));
});
