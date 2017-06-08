/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service282Service } from './service-282.service';

describe('Service282Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service282Service]
    });
  });

  it('should ...', inject([Service282Service], (service: Service282Service) => {
    expect(service).toBeTruthy();
  }));
});
