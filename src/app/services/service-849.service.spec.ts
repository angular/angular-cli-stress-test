/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service849Service } from './service-849.service';

describe('Service849Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service849Service]
    });
  });

  it('should ...', inject([Service849Service], (service: Service849Service) => {
    expect(service).toBeTruthy();
  }));
});
