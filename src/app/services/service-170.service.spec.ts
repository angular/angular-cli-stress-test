/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service170Service } from './service-170.service';

describe('Service170Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service170Service]
    });
  });

  it('should ...', inject([Service170Service], (service: Service170Service) => {
    expect(service).toBeTruthy();
  }));
});
