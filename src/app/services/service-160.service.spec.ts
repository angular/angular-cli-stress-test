/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service160Service } from './service-160.service';

describe('Service160Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service160Service]
    });
  });

  it('should ...', inject([Service160Service], (service: Service160Service) => {
    expect(service).toBeTruthy();
  }));
});
