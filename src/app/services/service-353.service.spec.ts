/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service353Service } from './service-353.service';

describe('Service353Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service353Service]
    });
  });

  it('should ...', inject([Service353Service], (service: Service353Service) => {
    expect(service).toBeTruthy();
  }));
});
