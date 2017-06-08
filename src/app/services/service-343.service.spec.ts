/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service343Service } from './service-343.service';

describe('Service343Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service343Service]
    });
  });

  it('should ...', inject([Service343Service], (service: Service343Service) => {
    expect(service).toBeTruthy();
  }));
});
