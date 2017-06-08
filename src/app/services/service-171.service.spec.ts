/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service171Service } from './service-171.service';

describe('Service171Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service171Service]
    });
  });

  it('should ...', inject([Service171Service], (service: Service171Service) => {
    expect(service).toBeTruthy();
  }));
});
