/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service87Service } from './service-87.service';

describe('Service87Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service87Service]
    });
  });

  it('should ...', inject([Service87Service], (service: Service87Service) => {
    expect(service).toBeTruthy();
  }));
});
