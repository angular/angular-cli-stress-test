/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service570Service } from './service-570.service';

describe('Service570Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service570Service]
    });
  });

  it('should ...', inject([Service570Service], (service: Service570Service) => {
    expect(service).toBeTruthy();
  }));
});
