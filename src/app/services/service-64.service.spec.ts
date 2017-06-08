/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service64Service } from './service-64.service';

describe('Service64Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service64Service]
    });
  });

  it('should ...', inject([Service64Service], (service: Service64Service) => {
    expect(service).toBeTruthy();
  }));
});
