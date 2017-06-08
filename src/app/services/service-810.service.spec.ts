/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service810Service } from './service-810.service';

describe('Service810Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service810Service]
    });
  });

  it('should ...', inject([Service810Service], (service: Service810Service) => {
    expect(service).toBeTruthy();
  }));
});
