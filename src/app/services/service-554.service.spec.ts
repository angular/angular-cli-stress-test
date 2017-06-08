/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service554Service } from './service-554.service';

describe('Service554Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service554Service]
    });
  });

  it('should ...', inject([Service554Service], (service: Service554Service) => {
    expect(service).toBeTruthy();
  }));
});
