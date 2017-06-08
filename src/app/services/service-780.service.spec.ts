/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service780Service } from './service-780.service';

describe('Service780Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service780Service]
    });
  });

  it('should ...', inject([Service780Service], (service: Service780Service) => {
    expect(service).toBeTruthy();
  }));
});
