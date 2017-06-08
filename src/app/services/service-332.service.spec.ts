/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service332Service } from './service-332.service';

describe('Service332Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service332Service]
    });
  });

  it('should ...', inject([Service332Service], (service: Service332Service) => {
    expect(service).toBeTruthy();
  }));
});
