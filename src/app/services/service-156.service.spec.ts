/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service156Service } from './service-156.service';

describe('Service156Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service156Service]
    });
  });

  it('should ...', inject([Service156Service], (service: Service156Service) => {
    expect(service).toBeTruthy();
  }));
});
