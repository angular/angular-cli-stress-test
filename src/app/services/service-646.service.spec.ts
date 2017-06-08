/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service646Service } from './service-646.service';

describe('Service646Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service646Service]
    });
  });

  it('should ...', inject([Service646Service], (service: Service646Service) => {
    expect(service).toBeTruthy();
  }));
});
