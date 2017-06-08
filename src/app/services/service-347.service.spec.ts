/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service347Service } from './service-347.service';

describe('Service347Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service347Service]
    });
  });

  it('should ...', inject([Service347Service], (service: Service347Service) => {
    expect(service).toBeTruthy();
  }));
});
