/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service878Service } from './service-878.service';

describe('Service878Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service878Service]
    });
  });

  it('should ...', inject([Service878Service], (service: Service878Service) => {
    expect(service).toBeTruthy();
  }));
});
