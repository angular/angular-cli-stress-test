/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service131Service } from './service-131.service';

describe('Service131Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service131Service]
    });
  });

  it('should ...', inject([Service131Service], (service: Service131Service) => {
    expect(service).toBeTruthy();
  }));
});
