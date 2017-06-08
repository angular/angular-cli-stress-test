/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service314Service } from './service-314.service';

describe('Service314Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service314Service]
    });
  });

  it('should ...', inject([Service314Service], (service: Service314Service) => {
    expect(service).toBeTruthy();
  }));
});
