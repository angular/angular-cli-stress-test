/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service903Service } from './service-903.service';

describe('Service903Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service903Service]
    });
  });

  it('should ...', inject([Service903Service], (service: Service903Service) => {
    expect(service).toBeTruthy();
  }));
});
