/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service845Service } from './service-845.service';

describe('Service845Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service845Service]
    });
  });

  it('should ...', inject([Service845Service], (service: Service845Service) => {
    expect(service).toBeTruthy();
  }));
});
