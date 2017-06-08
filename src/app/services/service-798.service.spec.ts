/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service798Service } from './service-798.service';

describe('Service798Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service798Service]
    });
  });

  it('should ...', inject([Service798Service], (service: Service798Service) => {
    expect(service).toBeTruthy();
  }));
});
