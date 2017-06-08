/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service795Service } from './service-795.service';

describe('Service795Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service795Service]
    });
  });

  it('should ...', inject([Service795Service], (service: Service795Service) => {
    expect(service).toBeTruthy();
  }));
});
