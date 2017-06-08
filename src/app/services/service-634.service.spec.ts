/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service634Service } from './service-634.service';

describe('Service634Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service634Service]
    });
  });

  it('should ...', inject([Service634Service], (service: Service634Service) => {
    expect(service).toBeTruthy();
  }));
});
