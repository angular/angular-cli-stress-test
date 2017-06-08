/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service300Service } from './service-300.service';

describe('Service300Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service300Service]
    });
  });

  it('should ...', inject([Service300Service], (service: Service300Service) => {
    expect(service).toBeTruthy();
  }));
});
