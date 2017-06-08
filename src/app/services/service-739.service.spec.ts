/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service739Service } from './service-739.service';

describe('Service739Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service739Service]
    });
  });

  it('should ...', inject([Service739Service], (service: Service739Service) => {
    expect(service).toBeTruthy();
  }));
});
