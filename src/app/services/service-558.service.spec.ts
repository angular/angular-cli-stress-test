/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service558Service } from './service-558.service';

describe('Service558Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service558Service]
    });
  });

  it('should ...', inject([Service558Service], (service: Service558Service) => {
    expect(service).toBeTruthy();
  }));
});
