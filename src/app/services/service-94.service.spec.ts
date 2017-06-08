/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service94Service } from './service-94.service';

describe('Service94Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service94Service]
    });
  });

  it('should ...', inject([Service94Service], (service: Service94Service) => {
    expect(service).toBeTruthy();
  }));
});
