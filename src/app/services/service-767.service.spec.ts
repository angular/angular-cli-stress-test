/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service767Service } from './service-767.service';

describe('Service767Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service767Service]
    });
  });

  it('should ...', inject([Service767Service], (service: Service767Service) => {
    expect(service).toBeTruthy();
  }));
});
