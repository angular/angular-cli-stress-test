/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service755Service } from './service-755.service';

describe('Service755Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service755Service]
    });
  });

  it('should ...', inject([Service755Service], (service: Service755Service) => {
    expect(service).toBeTruthy();
  }));
});
