/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service818Service } from './service-818.service';

describe('Service818Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service818Service]
    });
  });

  it('should ...', inject([Service818Service], (service: Service818Service) => {
    expect(service).toBeTruthy();
  }));
});
