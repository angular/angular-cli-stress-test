/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service604Service } from './service-604.service';

describe('Service604Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service604Service]
    });
  });

  it('should ...', inject([Service604Service], (service: Service604Service) => {
    expect(service).toBeTruthy();
  }));
});
