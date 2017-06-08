/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service636Service } from './service-636.service';

describe('Service636Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service636Service]
    });
  });

  it('should ...', inject([Service636Service], (service: Service636Service) => {
    expect(service).toBeTruthy();
  }));
});
