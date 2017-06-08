/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service553Service } from './service-553.service';

describe('Service553Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service553Service]
    });
  });

  it('should ...', inject([Service553Service], (service: Service553Service) => {
    expect(service).toBeTruthy();
  }));
});
