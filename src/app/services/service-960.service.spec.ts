/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service960Service } from './service-960.service';

describe('Service960Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service960Service]
    });
  });

  it('should ...', inject([Service960Service], (service: Service960Service) => {
    expect(service).toBeTruthy();
  }));
});
