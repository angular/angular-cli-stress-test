/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service499Service } from './service-499.service';

describe('Service499Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service499Service]
    });
  });

  it('should ...', inject([Service499Service], (service: Service499Service) => {
    expect(service).toBeTruthy();
  }));
});
