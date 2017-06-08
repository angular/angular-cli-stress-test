/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service682Service } from './service-682.service';

describe('Service682Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service682Service]
    });
  });

  it('should ...', inject([Service682Service], (service: Service682Service) => {
    expect(service).toBeTruthy();
  }));
});
