/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service277Service } from './service-277.service';

describe('Service277Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service277Service]
    });
  });

  it('should ...', inject([Service277Service], (service: Service277Service) => {
    expect(service).toBeTruthy();
  }));
});
