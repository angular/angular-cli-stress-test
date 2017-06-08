/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service876Service } from './service-876.service';

describe('Service876Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service876Service]
    });
  });

  it('should ...', inject([Service876Service], (service: Service876Service) => {
    expect(service).toBeTruthy();
  }));
});
