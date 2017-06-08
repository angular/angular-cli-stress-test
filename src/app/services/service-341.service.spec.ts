/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service341Service } from './service-341.service';

describe('Service341Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service341Service]
    });
  });

  it('should ...', inject([Service341Service], (service: Service341Service) => {
    expect(service).toBeTruthy();
  }));
});
