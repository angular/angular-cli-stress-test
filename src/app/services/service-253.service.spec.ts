/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service253Service } from './service-253.service';

describe('Service253Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service253Service]
    });
  });

  it('should ...', inject([Service253Service], (service: Service253Service) => {
    expect(service).toBeTruthy();
  }));
});
