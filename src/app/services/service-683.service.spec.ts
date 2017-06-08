/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service683Service } from './service-683.service';

describe('Service683Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service683Service]
    });
  });

  it('should ...', inject([Service683Service], (service: Service683Service) => {
    expect(service).toBeTruthy();
  }));
});
