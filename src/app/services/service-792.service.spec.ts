/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service792Service } from './service-792.service';

describe('Service792Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service792Service]
    });
  });

  it('should ...', inject([Service792Service], (service: Service792Service) => {
    expect(service).toBeTruthy();
  }));
});
