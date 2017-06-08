/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service610Service } from './service-610.service';

describe('Service610Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service610Service]
    });
  });

  it('should ...', inject([Service610Service], (service: Service610Service) => {
    expect(service).toBeTruthy();
  }));
});
