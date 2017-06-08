/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service836Service } from './service-836.service';

describe('Service836Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service836Service]
    });
  });

  it('should ...', inject([Service836Service], (service: Service836Service) => {
    expect(service).toBeTruthy();
  }));
});
