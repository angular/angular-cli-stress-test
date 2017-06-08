/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service943Service } from './service-943.service';

describe('Service943Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service943Service]
    });
  });

  it('should ...', inject([Service943Service], (service: Service943Service) => {
    expect(service).toBeTruthy();
  }));
});
