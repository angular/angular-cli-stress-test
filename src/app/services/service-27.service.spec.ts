/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service27Service } from './service-27.service';

describe('Service27Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service27Service]
    });
  });

  it('should ...', inject([Service27Service], (service: Service27Service) => {
    expect(service).toBeTruthy();
  }));
});
