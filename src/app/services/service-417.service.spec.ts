/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service417Service } from './service-417.service';

describe('Service417Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service417Service]
    });
  });

  it('should ...', inject([Service417Service], (service: Service417Service) => {
    expect(service).toBeTruthy();
  }));
});
