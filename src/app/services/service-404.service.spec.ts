/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service404Service } from './service-404.service';

describe('Service404Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service404Service]
    });
  });

  it('should ...', inject([Service404Service], (service: Service404Service) => {
    expect(service).toBeTruthy();
  }));
});
