/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service949Service } from './service-949.service';

describe('Service949Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service949Service]
    });
  });

  it('should ...', inject([Service949Service], (service: Service949Service) => {
    expect(service).toBeTruthy();
  }));
});
