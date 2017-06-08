/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service98Service } from './service-98.service';

describe('Service98Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service98Service]
    });
  });

  it('should ...', inject([Service98Service], (service: Service98Service) => {
    expect(service).toBeTruthy();
  }));
});
