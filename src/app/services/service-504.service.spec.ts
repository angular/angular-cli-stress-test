/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service504Service } from './service-504.service';

describe('Service504Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service504Service]
    });
  });

  it('should ...', inject([Service504Service], (service: Service504Service) => {
    expect(service).toBeTruthy();
  }));
});
