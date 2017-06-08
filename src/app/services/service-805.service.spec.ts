/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service805Service } from './service-805.service';

describe('Service805Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service805Service]
    });
  });

  it('should ...', inject([Service805Service], (service: Service805Service) => {
    expect(service).toBeTruthy();
  }));
});
