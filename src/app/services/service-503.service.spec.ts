/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service503Service } from './service-503.service';

describe('Service503Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service503Service]
    });
  });

  it('should ...', inject([Service503Service], (service: Service503Service) => {
    expect(service).toBeTruthy();
  }));
});
