/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service269Service } from './service-269.service';

describe('Service269Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service269Service]
    });
  });

  it('should ...', inject([Service269Service], (service: Service269Service) => {
    expect(service).toBeTruthy();
  }));
});
