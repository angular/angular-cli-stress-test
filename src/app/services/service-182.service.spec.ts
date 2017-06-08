/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service182Service } from './service-182.service';

describe('Service182Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service182Service]
    });
  });

  it('should ...', inject([Service182Service], (service: Service182Service) => {
    expect(service).toBeTruthy();
  }));
});
