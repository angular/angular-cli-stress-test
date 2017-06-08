/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service304Service } from './service-304.service';

describe('Service304Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service304Service]
    });
  });

  it('should ...', inject([Service304Service], (service: Service304Service) => {
    expect(service).toBeTruthy();
  }));
});
