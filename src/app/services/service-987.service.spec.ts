/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service987Service } from './service-987.service';

describe('Service987Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service987Service]
    });
  });

  it('should ...', inject([Service987Service], (service: Service987Service) => {
    expect(service).toBeTruthy();
  }));
});
