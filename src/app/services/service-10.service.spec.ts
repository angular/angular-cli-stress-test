/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service10Service } from './service-10.service';

describe('Service10Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service10Service]
    });
  });

  it('should ...', inject([Service10Service], (service: Service10Service) => {
    expect(service).toBeTruthy();
  }));
});
