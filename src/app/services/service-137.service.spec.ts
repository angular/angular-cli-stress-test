/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service137Service } from './service-137.service';

describe('Service137Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service137Service]
    });
  });

  it('should ...', inject([Service137Service], (service: Service137Service) => {
    expect(service).toBeTruthy();
  }));
});
