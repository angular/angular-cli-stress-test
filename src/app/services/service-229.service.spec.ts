/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service229Service } from './service-229.service';

describe('Service229Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service229Service]
    });
  });

  it('should ...', inject([Service229Service], (service: Service229Service) => {
    expect(service).toBeTruthy();
  }));
});
