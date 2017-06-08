/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service906Service } from './service-906.service';

describe('Service906Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service906Service]
    });
  });

  it('should ...', inject([Service906Service], (service: Service906Service) => {
    expect(service).toBeTruthy();
  }));
});
