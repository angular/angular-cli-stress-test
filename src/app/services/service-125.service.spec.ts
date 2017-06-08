/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service125Service } from './service-125.service';

describe('Service125Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service125Service]
    });
  });

  it('should ...', inject([Service125Service], (service: Service125Service) => {
    expect(service).toBeTruthy();
  }));
});
