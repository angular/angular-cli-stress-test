/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service633Service } from './service-633.service';

describe('Service633Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service633Service]
    });
  });

  it('should ...', inject([Service633Service], (service: Service633Service) => {
    expect(service).toBeTruthy();
  }));
});
