/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service577Service } from './service-577.service';

describe('Service577Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service577Service]
    });
  });

  it('should ...', inject([Service577Service], (service: Service577Service) => {
    expect(service).toBeTruthy();
  }));
});
