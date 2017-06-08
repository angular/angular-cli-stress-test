/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service502Service } from './service-502.service';

describe('Service502Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service502Service]
    });
  });

  it('should ...', inject([Service502Service], (service: Service502Service) => {
    expect(service).toBeTruthy();
  }));
});
