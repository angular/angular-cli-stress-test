/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service535Service } from './service-535.service';

describe('Service535Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service535Service]
    });
  });

  it('should ...', inject([Service535Service], (service: Service535Service) => {
    expect(service).toBeTruthy();
  }));
});
