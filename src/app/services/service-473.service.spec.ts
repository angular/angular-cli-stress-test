/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service473Service } from './service-473.service';

describe('Service473Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service473Service]
    });
  });

  it('should ...', inject([Service473Service], (service: Service473Service) => {
    expect(service).toBeTruthy();
  }));
});
