/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service149Service } from './service-149.service';

describe('Service149Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service149Service]
    });
  });

  it('should ...', inject([Service149Service], (service: Service149Service) => {
    expect(service).toBeTruthy();
  }));
});
