/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service562Service } from './service-562.service';

describe('Service562Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service562Service]
    });
  });

  it('should ...', inject([Service562Service], (service: Service562Service) => {
    expect(service).toBeTruthy();
  }));
});
