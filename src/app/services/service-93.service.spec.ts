/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service93Service } from './service-93.service';

describe('Service93Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service93Service]
    });
  });

  it('should ...', inject([Service93Service], (service: Service93Service) => {
    expect(service).toBeTruthy();
  }));
});
