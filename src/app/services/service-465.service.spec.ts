/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service465Service } from './service-465.service';

describe('Service465Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service465Service]
    });
  });

  it('should ...', inject([Service465Service], (service: Service465Service) => {
    expect(service).toBeTruthy();
  }));
});
