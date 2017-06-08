/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service471Service } from './service-471.service';

describe('Service471Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service471Service]
    });
  });

  it('should ...', inject([Service471Service], (service: Service471Service) => {
    expect(service).toBeTruthy();
  }));
});
