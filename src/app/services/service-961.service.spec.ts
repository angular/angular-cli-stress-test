/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service961Service } from './service-961.service';

describe('Service961Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service961Service]
    });
  });

  it('should ...', inject([Service961Service], (service: Service961Service) => {
    expect(service).toBeTruthy();
  }));
});
