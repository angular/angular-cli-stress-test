/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service712Service } from './service-712.service';

describe('Service712Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service712Service]
    });
  });

  it('should ...', inject([Service712Service], (service: Service712Service) => {
    expect(service).toBeTruthy();
  }));
});
