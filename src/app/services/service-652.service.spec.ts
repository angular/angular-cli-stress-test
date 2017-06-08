/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service652Service } from './service-652.service';

describe('Service652Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service652Service]
    });
  });

  it('should ...', inject([Service652Service], (service: Service652Service) => {
    expect(service).toBeTruthy();
  }));
});
