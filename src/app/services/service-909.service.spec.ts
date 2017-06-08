/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service909Service } from './service-909.service';

describe('Service909Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service909Service]
    });
  });

  it('should ...', inject([Service909Service], (service: Service909Service) => {
    expect(service).toBeTruthy();
  }));
});
