/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service951Service } from './service-951.service';

describe('Service951Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service951Service]
    });
  });

  it('should ...', inject([Service951Service], (service: Service951Service) => {
    expect(service).toBeTruthy();
  }));
});
