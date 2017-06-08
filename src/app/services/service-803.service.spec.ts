/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service803Service } from './service-803.service';

describe('Service803Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service803Service]
    });
  });

  it('should ...', inject([Service803Service], (service: Service803Service) => {
    expect(service).toBeTruthy();
  }));
});
