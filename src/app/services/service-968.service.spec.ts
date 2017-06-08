/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service968Service } from './service-968.service';

describe('Service968Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service968Service]
    });
  });

  it('should ...', inject([Service968Service], (service: Service968Service) => {
    expect(service).toBeTruthy();
  }));
});
