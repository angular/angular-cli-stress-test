/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service592Service } from './service-592.service';

describe('Service592Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service592Service]
    });
  });

  it('should ...', inject([Service592Service], (service: Service592Service) => {
    expect(service).toBeTruthy();
  }));
});
