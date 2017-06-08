/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service918Service } from './service-918.service';

describe('Service918Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service918Service]
    });
  });

  it('should ...', inject([Service918Service], (service: Service918Service) => {
    expect(service).toBeTruthy();
  }));
});
