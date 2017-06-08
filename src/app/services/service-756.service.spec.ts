/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service756Service } from './service-756.service';

describe('Service756Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service756Service]
    });
  });

  it('should ...', inject([Service756Service], (service: Service756Service) => {
    expect(service).toBeTruthy();
  }));
});
