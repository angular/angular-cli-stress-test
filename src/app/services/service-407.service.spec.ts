/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service407Service } from './service-407.service';

describe('Service407Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service407Service]
    });
  });

  it('should ...', inject([Service407Service], (service: Service407Service) => {
    expect(service).toBeTruthy();
  }));
});
