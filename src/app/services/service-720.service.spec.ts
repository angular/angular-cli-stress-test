/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service720Service } from './service-720.service';

describe('Service720Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service720Service]
    });
  });

  it('should ...', inject([Service720Service], (service: Service720Service) => {
    expect(service).toBeTruthy();
  }));
});
