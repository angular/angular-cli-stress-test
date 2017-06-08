/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service950Service } from './service-950.service';

describe('Service950Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service950Service]
    });
  });

  it('should ...', inject([Service950Service], (service: Service950Service) => {
    expect(service).toBeTruthy();
  }));
});
